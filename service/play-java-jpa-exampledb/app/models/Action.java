package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Action {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long actionid;

    public String actionname;
    public String description;
    public String actionpath;
    public String email;
    public double actionrating;
    public Long numberofusers;


    public Long getActionid() {
        return actionid;
    }
    public String getActionname() {
        return actionname;
    }
    public String getDescription() {
        return description;
    }
    public String getActionpath() {
        return actionpath;
    }
    public String getEmail() {
        return email;
    }
    public double getActionrating() {
        return actionrating;
    }
    public Long getNumberofusers() {
        return numberofusers;
    }

    public void setActionid(Long actionid) {
        this.actionid = actionid;
    }
    public void setActionname(String actionname) {
        this.actionname = actionname;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setActionpath(String actionpath) {
        this.actionpath = actionpath;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setActionrating(double actionrating) {
        this.actionrating = actionrating;
    }
    public void setNumberofusers(Long numberofusers) {
        this.numberofusers = numberofusers;
    }
}
