package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPARatingRepository.class)
public interface RatingRepository {

    CompletionStage<Rating> add(Long actionid,String email,double ratingvalue);

    CompletionStage<Rating> comment(Long actionid,String email,String comment);

}


