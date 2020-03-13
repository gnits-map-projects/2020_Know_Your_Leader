package models;

import play.db.jpa.JPAApi;
import scala.util.parsing.json.JSONObject$;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.Persistence;
import javax.persistence.EntityManagerFactory;
import javax.xml.soap.Name;
import java.util.Collections;
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
public class JPAActionRepository implements ActionRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAActionRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Action> add(Action action) {
        return supplyAsync(() -> wrap(em -> insert(em, action)), executionContext);
    }

    public CompletionStage<Action> del(String Name) {
        return supplyAsync(() -> wrap(em -> delete(em, Name)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Action>> list(String email) {
        return supplyAsync(() -> wrap(em -> list(em,email)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Action>> lista(String email) {
        return supplyAsync(() -> wrap(em -> lista(em,email)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Action>> listf(String email, String filter) {
        return supplyAsync(() -> wrap(em -> listf(em,email,filter)), executionContext);
    }

    @Override
    public CompletionStage<Action> updateRating(Long actionid, double actionrating) {
        return supplyAsync(() -> wrap(em -> updateActionRating(em, actionid, actionrating)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Action insert(EntityManager em, Action action) {
        em.persist(action);
        return action;
    }

    private Action delete(EntityManager em,String Name)
    {
        TypedQuery<Action> query = em.createQuery("select a from Action a where a.actionname= :Name", Action.class);
        Action action =query.setParameter("Name", Name).getSingleResult();
        em.remove(action);
        return action;
    }

    private Stream<Action> list(EntityManager em,String email) {
        List<Action> actions = em.createQuery("select a from Action a where a.email !=: email",Action.class).setParameter("email",email).getResultList();
        for(Action a : actions){
            Long actionid = a.getActionid();
            //Long ractionid =
             List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
             //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
             //q.setMaxResults(1);
             //q.setParameter("email",email).setParameter("actionid",actionid);
             //Rating r = q.getSingleResult();
            // if(!rating.isEmpty()) {
            a.setRating(rating);
             //}

        }
        /*List<Object> jsonactions = Collections.emptyList();
        for(Object[] l : actions) {

            for(Object o : l){

            }
        }*/
        return actions.stream();
    }

    private Stream<Action> lista(EntityManager em,String email) {
        List<Action> actions = em.createQuery("select a from Action a where a.email =: email order by a.actionid desc", Action.class).setParameter("email",email).getResultList();
        for(Action a : actions){
            Long actionid = a.getActionid();
            //Long ractionid =
            List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
            //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
            //q.setMaxResults(1);
            //q.setParameter("email",email).setParameter("actionid",actionid);
            //Rating r = q.getSingleResult();
            // if(!rating.isEmpty()) {
            a.setRating(rating);
            //}

        }
        return actions.stream();
    }

   private Stream<Action> listf(EntityManager em,String email,String filter) {

       List<Action> actions = Collections.emptyList();
        if(filter.equals("top-rated")){
        actions = em.createQuery("select a from Action a where a.email !=: email order by a.actionrating desc", Action.class).setParameter("email",email).getResultList();
            for(Action a : actions){
                Long actionid = a.getActionid();
                //Long ractionid =
                List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
                //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
                //q.setMaxResults(1);
                //q.setParameter("email",email).setParameter("actionid",actionid);
                //Rating r = q.getSingleResult();
                // if(!rating.isEmpty()) {
                a.setRating(rating);
                //}

            }
        }
        else if(filter.equals("recent")) {
        actions = em.createQuery("select a from Action a where a.email !=: email order by a.actionid desc", Action.class).setParameter("email",email).getResultList();
            for(Action a : actions){
                Long actionid = a.getActionid();
                //Long ractionid =
                List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
                //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
                //q.setMaxResults(1);
                //q.setParameter("email",email).setParameter("actionid",actionid);
                //Rating r = q.getSingleResult();
                // if(!rating.isEmpty()) {
                a.setRating(rating);
                //}

            }
        }
        else {
            actions = em.createQuery("select a from Action a where a.email !=: email order by a.actionid desc", Action.class).setParameter("email",email).getResultList();
            for(Action a : actions){
                Long actionid = a.getActionid();
                //Long ractionid =
                List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
                //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
                //q.setMaxResults(1);
                //q.setParameter("email",email).setParameter("actionid",actionid);
                //Rating r = q.getSingleResult();
                // if(!rating.isEmpty()) {
                a.setRating(rating);
                //}

            }
        }
       return actions.stream();
    }

    /*@Override
    public Action ratingChange(Long actionid, double arating){
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
        EntityManager em = entityManagerFactory.createEntityManager();
        em.getTransaction().begin();
        Action act=em.createQuery("select a from Action a where a.actionid=:actionid",Action.class).setParameter("actionid",actionid).getSingleResult();
       Long numberofusers = act.getNumberofusers();
       double rating = act.getActionrating();
       double actionrating = (rating*numberofusers+arating)/(numberofusers+1);
       numberofusers++;
        //int i= em.createQuery("update Action a set a.actionrating =: actionrating,a.numberofusers =: numberofusers where a.actionid =: actionid").setParameter("actionrating",actionrating).setParameter("numberofusers",numberofusers).setParameter("actionid",actionid).executeUpdate();

        int i= em.createQuery("update Action a set a.actionrating =: 3,a.numberofusers =: 2 where a.actionid =: actionid").setParameter("actionid",actionid).executeUpdate();
        if(i>0){
            Action action=em.createQuery("select a from Action a where a.actionid=:actionid",Action.class).setParameter("actionid",actionid).getSingleResult();
            return action;
        }
        else{
            return null;
        }
    }*/

    private Action updateActionRating(EntityManager em,Long actionid, double arating) {
        // EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
        // EntityManager em = entityManagerFactory.createEntityManager();
        //em.getTransaction().begin();

        Action act=em.createQuery("select a from Action a where a.actionid=:actionid",Action.class).setParameter("actionid",actionid).getSingleResult();
        Long numberofusers = act.getNumberofusers();
        double rating = act.getActionrating();
        double actionrating = (rating*numberofusers+arating)/(numberofusers+1);
        numberofusers++;
        int i= em.createQuery("update Action a set a.actionrating =: actionrating,a.numberofusers =: numberofusers where a.actionid =: actionid").setParameter("actionrating",actionrating).setParameter("numberofusers",numberofusers).setParameter("actionid",actionid).executeUpdate();

        if(i!=0){
            Action action=em.createQuery("select a from Action a where a.actionid=:actionid",Action.class).setParameter("actionid",actionid).getSingleResult();
            return action;
        }
        else{
            return null;
        }
    }


}
