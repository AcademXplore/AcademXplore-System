package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.dto.CandidaturaConfirmacaoRequest;
import com.academxplore.academxplore.dto.CandidaturaRecusaRequest;
import com.academxplore.academxplore.dto.CandidaturaRequestDTO;
import com.academxplore.academxplore.services.CandidaturaService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/candidatura")
public class CandidaturaController {

    @Autowired
    private CandidaturaService candidaturaService;

    @PostMapping("/criar")
    public ResponseEntity<Object> criarCandidatura(@RequestBody CandidaturaRequestDTO request){
        try{
            candidaturaService.criarCandidatura(request.getUsuarioID(),request.getProjetoID(), request.getEquipeID());
            return ResponseEntity.ok().body("Candidatura criada com sucesso!");
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
    @PutMapping("/aceitar/{id}")
    public ResponseEntity<Object> aceitarCandidatura(@PathVariable("id") String id){
        try{
            candidaturaService.aceitarCandidatura(id);
            return ResponseEntity.ok().body("Candidatura aceita com sucesso!");
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
    @PutMapping("/recusar/{id}")
    public ResponseEntity<Object> recusarCandidatura(@PathVariable("id") String id, @RequestBody CandidaturaRecusaRequest request){
        try{
            candidaturaService.recusarCandidatura(id, request.getMensagem());
            return ResponseEntity.ok().body("Candidatura recusada com sucesso!");
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PostMapping("/confirmar")
    public ResponseEntity<Object> confirmarCandidatura(@RequestBody CandidaturaConfirmacaoRequest request){
        try{
            return ResponseEntity.ok().body(candidaturaService.confirmarCandidatura(request.getUsuarioID(), request.getProjetoID()));
        }
        catch(Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
    
}