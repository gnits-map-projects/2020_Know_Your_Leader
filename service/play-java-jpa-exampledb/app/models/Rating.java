package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long ratingid;


    public Long actionid;
    public String email;
    public double ratingvalue;

    public Long getRatingid() {
        return ratingid;
    }

    public Long getActionid() {
        return actionid;
    }

    public String getEmail() {
        return email;
    }
    public double getRatingvalue() {
        return ratingvalue;
    }

    public void setRatingid(Long ratingid) {
        this.ratingid = ratingid;
    }

    public void setActionid(Long actionid) {
        this.actionid = actionid;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setRatingvalue(double ratingvalue) {
        this.ratingvalue = ratingvalue;
    }
}
