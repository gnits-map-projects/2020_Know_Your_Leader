package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public Long id;

    public String firstname;
    public String lastname;
    public String password;
    public BigInteger phoneno;
    public String email;
    public String gender;
    public String locality;


    /*public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }*/
}
