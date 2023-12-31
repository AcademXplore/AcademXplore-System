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

import com.academxplore.academxplore.dto.CadrastroRequest;
import com.academxplore.academxplore.dto.UsuarioDTO;
import com.academxplore.academxplore.services.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

  @Autowired
  private UsuarioService usuarioService;

  @GetMapping("/{id}")
  public ResponseEntity<Object> buscarUsuario(@PathVariable("id") String id) {
    try {
      return ResponseEntity.ok().body(usuarioService.buscarUsuario(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @PutMapping
  public ResponseEntity<Object> atualizarUsuario(@RequestBody UsuarioDTO usuario) {
    try {
      usuarioService.atualizarUsuario(usuario);
      return ResponseEntity.ok().body(null);
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @PostMapping("/cadastro")
  public ResponseEntity<Object> cadastrarUsuario(@RequestBody CadrastroRequest request) throws Exception {
    try {
      usuarioService.cadastrarUsuario(request);
      return ResponseEntity.created(null).body("Usuário criado com sucesso!");
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

}
