package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.services.AlunoService;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

  @Autowired
  private AlunoService alunoService;

  @GetMapping("/equipes/{id}")
  public ResponseEntity<Object> buscarEquipesPorId(@PathVariable("id") String id){
    try{
      return ResponseEntity.ok().body(alunoService.buscarEquipesPorId(id));
    }
    catch(Exception e){
      return ResponseEntity.internalServerError().body(e);
    }
  }
}
