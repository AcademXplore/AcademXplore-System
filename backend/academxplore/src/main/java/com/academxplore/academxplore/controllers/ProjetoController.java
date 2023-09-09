package com.academxplore.academxplore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.services.ProjetoService;

@RestController
@RequestMapping("/projeto")
public class ProjetoController {

  @Autowired
  private ProjetoService projetoService;

  @GetMapping("/ativo")
  public List<ProjetoTimelineDTO> listarAtivos() {
    return projetoService.listarProjetosAtivos();
  }

  @GetMapping("/detalhes/{id}")
  public ResponseEntity<Object> buscarDetalhesPorId(@PathVariable("id") String id) throws Exception {
    try {
      return ResponseEntity.ok().body(projetoService.buscarDetalhesPorId(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @GetMapping("/equipes/{id}")
  public ResponseEntity<Object> buscarEquipesPorId(@PathVariable("id") String id) throws Exception {
    try {
      return ResponseEntity.ok().body(projetoService.buscarEquipesPorId(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @GetMapping("/candidaturas/{id}")
  public ResponseEntity<Object> buscarCandidaturasPorId(@PathVariable("id") String id) throws Exception {
    try {
      return ResponseEntity.ok().body(projetoService.buscarCandidaturasPorId(id));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @GetMapping("/pesquisa")
  public ResponseEntity<Object> buscarPorTituloProfessor(@RequestBody String pesquisa) throws Exception {
    try {
      return ResponseEntity.ok().body(projetoService.buscarPorTituloProfessor(pesquisa));
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }
}
