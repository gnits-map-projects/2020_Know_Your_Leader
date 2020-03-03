package controllers;

import models.Person;
import models.PersonRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import java.math.BigInteger;
import static play.libs.Json.toJson;

/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.HttpExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class PersonController extends Controller {

    private final FormFactory formFactory;
    private final PersonRepository personRepository;
    private final HttpExecutionContext ec;

    @Inject
    public PersonController(FormFactory formFactory, PersonRepository personRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.personRepository = personRepository;
        this.ec = ec;
    }

//    public Result index() {
//        return ok(views.html.index.render());
//    }

    public CompletionStage<Result> addPerson() {
        //Person person = formFactory.form(Person.class).bindFromRequest().get();
        //JsonNode requestJson= request().body().asJson();
        //String name=requestJson.get("name").asText();
        //long id=requestJson.get("id").asLong();
       Person person= Json.fromJson(request().body().asJson(),Person.class);
        //Person person = new Person();
          //      person.setName(name);
              //person.setId(id);
        return personRepository.add(person).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }

    public CompletionStage<Result> getPersons() {
        return personRepository.list().thenApplyAsync(personStream -> {
            return ok(toJson(personStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> deletePerson(){
        JsonNode requestJson= request().body().asJson();
        String Name=requestJson.get("name").asText();
        return personRepository.del(Name).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }

    public Result login(){
        JsonNode j = request().body().asJson();
        String email = j.get("email").asText();
        String password = j.get("password").asText();
        Person ps = personRepository.login(email,password);
        if(ps.email == null || ps.password == null ) {
            return null;
        }
        else{
            return ok(toJson(ps));
        }
    }

    public CompletionStage<Result> updatePerson(){
        JsonNode j = request().body().asJson();
        String firstname = j.get("firstname").asText();
        String lastname = j.get("lastname").asText();
        String password = j.get("password").asText();
        Long phoneno = j.get("phoneno").asLong();
        String email = j.get("email").asText();
        String locality = j.get("locality").asText();
        Long pincode = j.get("pincode").asLong();
        return personRepository.update(firstname,lastname,password,phoneno,email,locality,pincode).thenApplyAsync(p->{
            return ok("update successful");
        },ec.current());

    }

}
