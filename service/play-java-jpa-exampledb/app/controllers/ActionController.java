package controllers;
import com.google.inject.internal.cglib.core.$AbstractClassGenerator;
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
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import java.math.BigInteger;
import static play.libs.Json.toJson;
import play.mvc.Http.*;
import play.libs.Files.TemporaryFile;
import java.io.File;
import java.util.stream.Stream;

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

    public CompletionStage<Result> addActionImage() {
        //Action action = formFactory.form(Action.class).bindFromRequest().get();

        JsonNode requestJson= request().body().asJson();
        //long actionid=requestJson.get("actionid").asLong();
        String actionname=requestJson.get("actionname").asText();
        String description=requestJson.get("description").asText();
        String email=requestJson.get("email").asText();
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
        action.setEmail(email);

        //action.setActionrating(actionrating);

        return actionRepository.add(action).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok();
        }, ec.current());
    }

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

    public CompletionStage<Result> getActions(String email) {
        //CompletionStage<Stream<Action>> as = actionRepository.list(email);
        //for()
        return actionRepository.list(email).thenApplyAsync(actionStream -> {
            //List result = Collections.emptyList();
            String msg = null;
            String result = "";
            JsonNode a = toJson(actionStream.collect(Collectors.toList()));
            //JsonNode b
            //JsonNode p = a.get("rating").
            for(JsonNode p : a) {
                //JsonNode y = p.get("rating");
                if (p.get("rating").size() != 0) {
                    for (JsonNode x : p.get("rating")) {
                        JsonNode ratingvalue = x.get("ratingvalue");
                        JsonNode comment = x.get("comment");
                        msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue  + "\",\"comment\":" + comment + "}";
                        //return ok(x);
                        if (result != "") {
                            result = result + "," + msg;
                        } else {
                            result = "[" + msg;
                        }
                        //result.add(Json.parse(msg));
                    }
                }
                else{
                    double ratingvalue = 0.0;
                    String comment = null;
                    msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue + "\",\"comment\":" + comment + "}";
                    //return ok(x);
                    if (result != "") {
                        result = result + "," + msg;
                    } else {
                        result = "[" + msg;
                    }


                    //return ok(p);
                }
            }

            result = result +"]";
            //JsonNode f = Json.parse(result);
            return ok(Json.parse(result));
            //return ok(a);
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
            //JsonNode a = toJson(actionStream.collect(Collectors.toList()));
            String msg = null;
            String result = "";
            JsonNode a = toJson(actionStream.collect(Collectors.toList()));
            //JsonNode b
            //JsonNode p = a.get("rating").
            for(JsonNode p : a) {
                //JsonNode y = p.get("rating");
                if (p.get("rating").size() != 0) {
                    for (JsonNode x : p.get("rating")) {
                        JsonNode ratingvalue = x.get("ratingvalue");
                        JsonNode comment = x.get("comment");
                        msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue  + "\",\"comment\":" + comment + "}";
                        //return ok(x);
                        if (result != "") {
                            result = result + "," + msg;
                        } else {
                            result = "[" + msg;
                        }
                        //result.add(Json.parse(msg));
                    }
                }
                else{
                    double ratingvalue = 0.0;
                    String comment = null;
                    msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue + "\",\"comment\":" + comment + "}";
                    //return ok(x);
                    if (result != "") {
                        result = result + "," + msg;
                    } else {
                        result = "[" + msg;
                    }


                    //return ok(p);
                }
            }

            result = result +"]";
            //JsonNode f = Json.parse(result);
            return ok(Json.parse(result));
            //return ok(a);
            //return ok(a);
        }, ec.current());
    }

    public CompletionStage<Result> getActionsFilter(String email, String filter) {
        return actionRepository.listf(email, filter).thenApplyAsync(actionStream -> {
            String msg = null;
            String result = "";
            JsonNode a = toJson(actionStream.collect(Collectors.toList()));
            //JsonNode b
            //JsonNode p = a.get("rating").
            for(JsonNode p : a) {
                //JsonNode y = p.get("rating");
                if (p.get("rating").size() != 0) {
                    for (JsonNode x : p.get("rating")) {
                        JsonNode ratingvalue = x.get("ratingvalue");
                        JsonNode comment = x.get("comment");
                        msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue  + "\",\"comment\":" + comment + "}";
                        //return ok(x);
                        if (result != "") {
                            result = result + "," + msg;
                        } else {
                            result = "[" + msg;
                        }
                        //result.add(Json.parse(msg));
                    }
                }
                else{
                    double ratingvalue = 0.0;
                    String comment = null;
                    msg = "{\"actionid\" : \"" + p.get("actionid") + "\",\"actionname\":" + p.get("actionname") + ",\"description\":" + p.get("description") + ",\"actionpath\":" + p.get("actionpath") + ",\"email\":" + p.get("email") + ",\"actionrating\":\"" + p.get("actionrating") + "\",\"numberofusers\":\"" + p.get("numberofusers") + "\",\"ratingvalue\":\"" + ratingvalue + "\",\"comment\":" + comment + "}";
                    //return ok(x);
                    if (result != "") {
                        result = result + "," + msg;
                    } else {
                        result = "[" + msg;
                    }


                    //return ok(p);
                }
            }

            result = result +"]";
            //JsonNode f = Json.parse(result);
            return ok(Json.parse(result));
            //return ok(a);
        }, ec.current());
    }

    public CompletionStage<Result> ratingChange(){
        JsonNode j = request().body().asJson();
        Long actionid = j.get("actionid").asLong();
        double actionrating = j.get("actionrating").asDouble();
        return actionRepository.updateRating(actionid,actionrating).thenApplyAsync(p->{
            return ok("update successful");
        },ec.current());
    }
}

