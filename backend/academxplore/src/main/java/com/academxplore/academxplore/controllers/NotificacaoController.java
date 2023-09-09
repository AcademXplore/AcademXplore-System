package com.academxplore.academxplore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.services.NotificacaoService;

@RestController
@RequestMapping("/notificacao")
public class NotificacaoController {
  
  @Autowired
  private NotificacaoService notificacaoService;

  @GetMapping("/usuario/{id}")
  public ResponseEntity<Object> buscarNotificacaoUsuario(@PathVariable("id") String id){
    try {
      return ResponseEntity.ok().body(notificacaoService.buscarNotificacaoUsuario(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> buscarNotificacaoPorId(@PathVariable("id") String id){
    try {
      return ResponseEntity.ok().body(notificacaoService.buscarNotificacaoPorId(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<Object> atualizarStatusNotificacao(@PathVariable("id") String id){
    try {
      notificacaoService.atualizarStatusNotificacao(id);
      return ResponseEntity.ok().body(null);
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }
}
