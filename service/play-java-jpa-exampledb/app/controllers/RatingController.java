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

        JsonNode j = request().body().asJson();
        Long actionid = j.get("actionid").asLong();
        String email = j.get("email").asText();
        double ratingvalue = j.get("ratingvalue").asDouble();

        /*Long actionid = 5L;
        String email = "samadbaig@gmail.com";
        double ratingvalue = 4.0;
        String comment = "Good Work";*/
        return ratingRepository.add(actionid, email, ratingvalue).thenApplyAsync(p -> {
            return ok("update successful");
        }, ec.current());

    }

    public CompletionStage<Result> addComment() {

        JsonNode j = request().body().asJson();
        Long actionid = j.get("actionid").asLong();
        String email = j.get("email").asText();
        String comment = j.get("comment").asText();

        /*Long actionid = 5L;
        String email = "samadbaig@gmail.com";
        double ratingvalue = 4.0;
        String comment = "Good Work";*/
        return ratingRepository.comment(actionid, email,comment).thenApplyAsync(p -> {
            return ok("update successful");
        }, ec.current());
    }
}

