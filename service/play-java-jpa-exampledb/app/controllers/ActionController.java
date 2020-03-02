package controllers;
import models.Action;
import models.ActionRepository;
import models.Person;
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
import play.mvc.Http.*;
import play.libs.Files.TemporaryFile;
import java.io.File;

/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.HttpExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class ActionController extends Controller {

    private final FormFactory formFactory;
    private final ActionRepository actionRepository;
    private final HttpExecutionContext ec;

    @Inject
    public ActionController(FormFactory formFactory, ActionRepository actionRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.actionRepository = actionRepository;
        this.ec = ec;
    }

//    public Result index() {
//        return ok(views.html.index.render());
//    }

   /* public CompletionStage<Result> addAction() {
        //Action action = formFactory.form(Action.class).bindFromRequest().get();

        JsonNode requestJson= request().body().asJson();
        //long actionid=requestJson.get("actionid").asLong();
        String actionname=requestJson.get("actionname").asText();
        String description=requestJson.get("description").asText();
        long id=requestJson.get("id").asLong();
        String actionpath = null;
        Action action = new Action();

        MultipartFormData<File> body = request().body().asMultipartFormData();
        MultipartFormData.FilePart<File> image = body.getFile("image");
        if (image != null) {
            String fileName = image.getFilename();
            File file = (File)image.getFile();
            File newFile = new File( "Desktop/images/actions/" + fileName);
            file.renameTo(newFile);//here you are moving photo to new directory
            actionpath = newFile.getPath(); //this path you can store in database
            action.setActionpath(actionpath);
        }


        //float actionrating=requestJson.get("actionrating");

        //Action action= Json.fromJson(request().body().asJson(),Action.class);

        // Action action = new Action();
        //action.setActionid(actionid);
        action.setActionname(actionname);
        action.setDescription(description);
        action.setId(id);

        //action.setActionrating(actionrating);

        return actionRepository.add(action).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }*/

    public CompletionStage<Result> addAction() {
        //Person person = formFactory.form(Person.class).bindFromRequest().get();
        //JsonNode requestJson= request().body().asJson();
        //String name=requestJson.get("name").asText();
        //long id=requestJson.get("id").asLong();
        Action action= Json.fromJson(request().body().asJson(),Action.class);
        //Person person = new Person();
        //      person.setName(name);
        //person.setId(id);
        return actionRepository.add(action).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }

    public CompletionStage<Result> getActions() {
        return actionRepository.list().thenApplyAsync(actionStream -> {
            return ok(toJson(actionStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> deleteAction(){
        JsonNode requestJson= request().body().asJson();
        String Name=requestJson.get("actionname").asText();
        return actionRepository.del(Name).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }

    public CompletionStage<Result> getUserAction(String email){
        return actionRepository.lista(email).thenApplyAsync(actionStream -> {
            return ok(toJson(actionStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> getActionsFilter(String filter) {
        return actionRepository.listf(filter).thenApplyAsync(actionStream -> {
            return ok(toJson(actionStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public Result ratingChange(){
        JsonNode j = request().body().asJson();
        Long actionid = j.get("actionid").asLong();
        double actionrating = j.get("actionrating").asDouble();
        Action a = actionRepository.ratingChange(actionid,actionrating);
        if(a == null) {
            return null;
        }
        else{
            return ok("updated"+a.actionid+" to "+a.actionrating+" no. of users "+a.numberofusers);
        }
    }
}

