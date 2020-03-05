package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import java.math.BigInteger;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAActionRepository.class)
public interface ActionRepository {

    CompletionStage<Action> add(Action action);

    CompletionStage<Action> del(String Name);

    CompletionStage<Stream<Action>> list(String email);

    CompletionStage<Stream<Action>> lista(String email);

    CompletionStage<Stream<Action>> listf(String email, String filter);

    public CompletionStage<Action> updateRating(Long actionid,double actionrating);


}

