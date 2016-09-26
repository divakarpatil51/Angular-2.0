package com.angular2.controller;

import com.angular2.entity.UserDetails;
import com.angular2.repository.UserDetailRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class UserController {

    @Autowired
    UserDetailRepository userDetailRepository;

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public List<UserDetails> addUser(@RequestBody UserDetails userDetails) {
        System.out.println("com.angular2.controller.UserController.addUser()");
        userDetailRepository.save(userDetails);
        return userDetailRepository.findAll();
    }

    @RequestMapping(value = "/getusers", method = RequestMethod.GET)
    public List<UserDetails> getAllUsers() {
        System.out.println("com.angular2.controller.UserController.getAllUsers()");
        List<UserDetails> userDetails = userDetailRepository.findAll();
        return userDetails;
    }

    @RequestMapping(value = "/getuser/{id}", method = RequestMethod.GET)
    public UserDetails getUserById(@PathVariable long id) {
        System.out.println("com.angular2.controller.UserController.getUserById()" + userDetailRepository.getOne(id).getAddress());
        return userDetailRepository.getOne(id);
    }

    @RequestMapping(value = "/updateuser/{id}", method = RequestMethod.POST)
    public List<UserDetails> updateUser(@PathVariable long id,
            @RequestBody UserDetails userDetails) {
        System.out.println("com.angular2.controller.UserController.updateUser()"+ userDetails.getFirstName());
        UserDetails user = userDetailRepository.findOne(id);
        user.setAddress(userDetails.getAddress());
        user.setEmailId(userDetails.getEmailId());
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setPhoneNumber(userDetails.getPhoneNumber());
        userDetailRepository.save(user);
        return userDetailRepository.findAll();
    }

    @RequestMapping(value = "/deleteuser/{id}", method = RequestMethod.DELETE)
    public List<UserDetails> deleteUser(@PathVariable long id) {
        System.out.println("com.angular2.controller.UserController.deleteUser()");
        userDetailRepository.delete(id);
        return userDetailRepository.findAll();
    }

    @RequestMapping(value = "/searchuser", method = RequestMethod.GET)
    public List<UserDetails> searchUser(@RequestParam(value = "search") String searchText) {
        
        List<UserDetails> userDetails = userDetailRepository.findByFirstNameOrLastName(searchText);
        System.out.println("com.angular2.controller.UserController.searchUser()"+ userDetails.size());
        return userDetails;
    }
}
