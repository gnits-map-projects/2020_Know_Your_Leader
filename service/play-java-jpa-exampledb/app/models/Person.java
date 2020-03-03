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
    public Long phoneno;
    public String email;
    public String gender;
    public String locality;
    public Long pincode;

    public Long getId() {
        return id;
    }
    public String getFirstname() {
        return firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public String getPassword() {
        return password;
    }
    public Long getPhoneno() {
        return phoneno;
    }
    public String getEmail() {
        return email;
    }
    public String getGender() {
        return gender;
    }
    public String getLocality() {
        return locality;
    }
    public Long getPincode() {
        return pincode;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setPhoneno(Long phoneno) {
        this.phoneno = phoneno;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public void setLocality(String locality) {
        this.locality = locality;
    }
    public void setPincode(Long pincode) {
        this.pincode = pincode;
    }
}
