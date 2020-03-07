package models;

import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.*;
import javax.xml.soap.Name;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import java.lang.Exception;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPARatingRepository implements RatingRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPARatingRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Rating> add(Rating rating) {
        return supplyAsync(() -> wrap(em -> insert(em, rating)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Rating insert(EntityManager em, Rating rating) {
        Long actionid = rating.getActionid();
        String email = rating.getEmail();
        double ratingvalue = rating.getRatingvalue();
        Rating r=null;
        Query query=em.createQuery("select r from Rating r where r.actionid =: actionid and r.email =: email",Rating.class).setParameter("actionid",actionid).setParameter("email",email);
        try {
            r = (Rating) query.getSingleResult();
        }
        catch (NoResultException nre){

        }
        if(r == null){
            em.persist(rating);
        }
        else{
            int i= em.createQuery("update Rating r set r.ratingvalue =: ratingvalue where r.actionid =: actionid and r.email =: email").setParameter("ratingvalue",ratingvalue).setParameter("actionid",actionid).setParameter("email",email).executeUpdate();
        }
        return rating;

    }


}

