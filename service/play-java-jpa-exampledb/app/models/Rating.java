package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.math.BigInteger;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Rating")
public class Rating {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long ratingid;
    //public Long actionid;
    public String email;
    public double ratingvalue;
    public String comment;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "actionid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Action action;



    public Long getRatingid() {
        return ratingid;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getRatingvalue() {
        return ratingvalue;
    }

    public void setRatingid(Long ratingid) {
        this.ratingid = ratingid;
    }

    public void setRatingvalue(double ratingvalue) {
        this.ratingvalue = ratingvalue;
    }

    /*public Long getActionid() {
        return actionid;
    }

    public void setActionid(Long actionid) {
        this.actionid = actionid;
    }*/

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Action getAction() {
        return action;
    }

    public void setAction(Action action) {
        this.action = action;
    }
}
