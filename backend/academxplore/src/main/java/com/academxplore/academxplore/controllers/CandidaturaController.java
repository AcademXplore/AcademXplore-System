package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.dto.CandidaturaRequestDTO;
import com.academxplore.academxplore.services.CandidaturaService;

@RestController
@RequestMapping("/candidatura")
public class CandidaturaController {

    @Autowired
    private CandidaturaService candidaturaService;

    @PostMapping("/criar")
    public ResponseEntity<Object> criarCandidatura(@RequestBody CandidaturaRequestDTO request){
        try{
            candidaturaService.criarCandidatura(request.getUsuarioID(),request.getProjetoID());
            return ResponseEntity.ok().body("Candidatura criada com sucesso!");
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
    
}