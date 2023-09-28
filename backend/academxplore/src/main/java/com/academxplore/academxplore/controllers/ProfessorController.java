package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.services.ProfessorService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/professor")
public class ProfessorController {
  @Autowired
  private ProfessorService professorService;

  @GetMapping("/projetos/{id}")
  public ResponseEntity<Object> buscarProjetosPorId(@PathVariable String id){
    try{
      return ResponseEntity.ok().body(professorService.buscarProjetosPorId(id));
    }
    catch(Exception e){
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @GetMapping("/coorientador")
  public ResponseEntity<Object> buscarCoorientadorPorEmail(@RequestBody String email){
    try{
      return ResponseEntity.ok().body(professorService.buscarCoorientadorPorEmail(email));
    }
    catch(Exception e){
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }
}
