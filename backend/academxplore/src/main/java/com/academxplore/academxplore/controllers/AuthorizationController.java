package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.dto.AuthenticationDTO;

import com.academxplore.academxplore.services.LoginService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthorizationController {
  @Autowired
  private LoginService LoginService;

  @PostMapping("/login")
  public ResponseEntity<Object> login(@RequestBody AuthenticationDTO data){
    try {
      return ResponseEntity.ok().body(LoginService.login(data.email(), data.senha()));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }
}
