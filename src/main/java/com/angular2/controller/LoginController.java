package com.angular2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class LoginController {
        
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(){
		return "Here it is at last";
	}
}
