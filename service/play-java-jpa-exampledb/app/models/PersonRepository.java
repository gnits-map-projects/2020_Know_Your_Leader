package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import java.math.BigInteger;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAPersonRepository.class)
public interface PersonRepository {

    CompletionStage<Person> add(Person person);

    CompletionStage<Person> del(String Name);

    CompletionStage<Stream<Person>> list();

    abstract Person login(String email,String password);

    public CompletionStage<Person> update(String firstname,String lastname,String password,Long phoneno,String email,String locality,Long pincode);

}
