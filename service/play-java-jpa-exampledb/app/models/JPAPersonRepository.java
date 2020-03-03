package models;

import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.Persistence;
import javax.persistence.EntityManagerFactory;
import javax.xml.soap.Name;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import java.lang.Exception;
import java.math.BigInteger;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAPersonRepository implements PersonRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAPersonRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Person> add(Person person) {
        return supplyAsync(() -> wrap(em -> insert(em, person)), executionContext);
    }

    public CompletionStage<Person> del(String Name) {
        return supplyAsync(() -> wrap(em -> delete(em, Name)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Person>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    @Override
    public CompletionStage<Person> update(String firstname, String lastname, String password, Long phoneno, String email, String locality, Long pincode) {
        return supplyAsync(() -> wrap(em -> updatevalue(em, firstname, lastname, password, phoneno, email, locality, pincode)), executionContext);
    }


    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Person insert(EntityManager em, Person person) {
        em.persist(person);
        return person;
    }

    private Person delete(EntityManager em, String Name) {
        TypedQuery<Person> query = em.createQuery("select p from Person p where p.name= :Name", Person.class);
        Person person = query.setParameter("Name", Name).getSingleResult();
        em.remove(person);
        return person;
    }

    private Stream<Person> list(EntityManager em) {
        List<Person> persons = em.createQuery("select p from Person p", Person.class).getResultList();
        return persons.stream();
    }

    @Override
    public Person login(String email, String password) {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
        EntityManager em = entityManagerFactory.createEntityManager();
        em.getTransaction().begin();
        Person foundPerson = em.createQuery("select p from Person p where p.email =: email and p.password =: password", Person.class).setParameter("email", email).setParameter("password", password).getSingleResult();
        return foundPerson;
    }


    private Person updatevalue(EntityManager em, String firstname, String lastname, String password, Long phoneno, String email, String locality, Long pincode) {
        // EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
        // EntityManager em = entityManagerFactory.createEntityManager();
        //em.getTransaction().begin();
        int i = em.createQuery("update Person p set p.firstname =: firstname,p.lastname =: lastname,p.password =: password,p.phoneno=:phoneno,p.locality =: locality,p.pincode=:pincode where p.email =: email").setParameter("firstname", firstname).setParameter("lastname", lastname).setParameter("password", password).setParameter("phoneno", phoneno).setParameter("email", email).setParameter("locality", locality).setParameter("pincode", pincode).executeUpdate();
        if (i != 0) {
            Person persons = em.createQuery("select p from Person p where p.email=:email", Person.class).setParameter("email", email).getSingleResult();
            return persons;
        } else {
            return null;
        }
    }

}