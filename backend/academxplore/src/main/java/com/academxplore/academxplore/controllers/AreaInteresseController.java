package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.services.AreaInteresseService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/area-interesse")
public class AreaInteresseController {
  
  @Autowired
  private AreaInteresseService areaInteresseService;

  @GetMapping("/pesquisa")
  public ResponseEntity<Object> buscarAreaInteresseNome(@RequestBody String nome){
    try {
      return ResponseEntity.ok().body(areaInteresseService.buscarAreaInteresseNome(nome));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

}
