/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.angular2.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author dipatil
 */
@Entity
@Table(name="userdetails")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserDetails implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userId;

    String firstName;

    String lastName;

    String emailId;

    String address;

    Long phoneNumber;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    protected UserDetails(){
        
    }

    public UserDetails(Long userId, String firstName, String lastName, String emailId, String address, Long phoneNumber) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
