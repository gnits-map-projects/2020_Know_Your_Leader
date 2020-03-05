package controllers;

import models.RatingRepository;
import models.Rating;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import static play.libs.Json.toJson;
import play.mvc.Http.*;

/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.HttpExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class RatingController extends Controller {

    private final FormFactory formFactory;
    private final RatingRepository ratingRepository;
    private final HttpExecutionContext ec;

    @Inject
    public RatingController(FormFactory formFactory, RatingRepository ratingRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.ratingRepository = ratingRepository;
        this.ec = ec;
    }


    public CompletionStage<Result> addRating() {

        Rating rating= Json.fromJson(request().body().asJson(),Rating.class);

        return ratingRepository.add(rating).thenApplyAsync(p -> {
            return ok();
        }, ec.current());
    }

}

