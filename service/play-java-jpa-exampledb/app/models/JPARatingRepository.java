package models;

import play.db.jpa.JPAApi;
import play.shaded.ahc.io.netty.handler.timeout.TimeoutException;

import javax.inject.Inject;
import javax.persistence.*;
import javax.xml.soap.Name;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletionException;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.ExecutionException;
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
    public CompletionStage<Rating> add(Long actionid,String email,double ratingvalue) {
        return supplyAsync(() -> wrap(em -> insert(em, actionid,email,ratingvalue)), executionContext);
    }

    @Override
    public CompletionStage<Rating> comment(Long actionid,String email,String comment) {
        return supplyAsync(() -> wrap(em -> postComment(em, actionid,email,comment)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Rating insert(EntityManager em, Long actionid,String email,double ratingvalue) {
        /*Long actionid = rating.getAction().getActionid();
        String email = rating.getEmail();
        double ratingvalue = rating.getRatingvalue();*/

        /*actions = em.createQuery("select a from Action a where a.email !=: email order by a.actionid desc", Action.class).setParameter("email",email).getResultList();
        for(Action a : actions){
            Long actionid = a.getActionid();
            //Long ractionid =
            List<Rating> rating = em.createQuery("select r from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class).setParameter("email",email).setParameter("actionid",actionid).getResultList();
            //TypedQuery<Rating> q = em.createQuery("select r.ratingvalue from Rating r where r.email =: email and r.action.actionid =: actionid",Rating.class);
            //q.setMaxResults(1);
            //q.setParameter("email",email).setParameter("actionid",actionid);
            //Rating r = q.getSingleResult();
            // if(!rating.isEmpty()) {
            a.setRating(rating);*/


        Rating r = null;
        Query query = em.createQuery("select r from Rating r where r.action.actionid =: actionid and r.email =: email", Rating.class).setParameter("actionid", actionid).setParameter("email", email);
        try {
            r = (Rating) query.getSingleResult();
        } catch (NoResultException ex) {

        }

        if (r != null) {
            int i = em.createQuery("update Rating r set r.ratingvalue =: ratingvalue where r.action.actionid =: actionid and r.email =: email").setParameter("ratingvalue", ratingvalue).setParameter("actionid", actionid).setParameter("email", email).executeUpdate();
            return r;
        } else {
            Rating rate = new Rating();
            Action a = new Action();
            rate.setAction(a);
            //rate.getAction().actionid = actionid;
            rate.getAction().setActionid(actionid);
            rate.setEmail(email);
            rate.setRatingvalue(ratingvalue);
            em.persist(rate);
           /*int rate = (Rating) em.createNativeQuery("INSERT INTO Rating (actionid,email,ratingvalue,comment) VALUES (actionid,email,ratingvalue,comment)")
                   .setParameter("actionid",actionid)
                   .setParameter("email",email)
                   .setParameter("ratingvalue",ratingvalue)
                   .setParameter("comment",comment)
                   .executeUpdate();
           em.persist(rate);*/
            return rate;
        }
    }

        private Rating postComment(EntityManager em,Long actionid,String email,String comment)
        {
            Rating r = null;
            Query query= em.createQuery("select r from Rating r where r.action.actionid =: actionid and r.email =: email",Rating.class).setParameter("actionid",actionid).setParameter("email",email);
            try {
                r = (Rating) query.getSingleResult();
            }
            catch (NoResultException ex) {

            }

            if(r != null){
                int i= em.createQuery("update Rating r set r.comment =: comment where r.action.actionid =: actionid and r.email =: email").setParameter("comment",comment).setParameter("actionid",actionid).setParameter("email",email).executeUpdate();
                return r;
            }
            else{
                Rating rate = new Rating();
                Action a = new Action();
                rate.setAction(a);
                //rate.getAction().actionid = actionid;
                rate.getAction().setActionid(actionid);
                rate.setEmail(email);
                rate.setComment(comment);
                em.persist(rate);
                return rate;
            }

        }

    }



