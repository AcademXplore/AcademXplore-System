package com.academxplore.academxplore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academxplore.academxplore.dto.CadastroProjetoResquest;
import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.services.ProjetoService;

@CrossOrigin(origins = "*")
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

  @PostMapping("/cadastro")
  public ResponseEntity<Object> cadastrarProjeto(@RequestBody CadastroProjetoResquest cadastroResquest){
    try {
      projetoService.cadastrarProjeto(cadastroResquest);
      return ResponseEntity.ok().body("Projeto criado com sucesso!");
    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(e.getMessage());
    }
  }

  @PostMapping("/encerrar/{id}")
  public ResponseEntity<Object> encerrarProjeto(@PathVariable("id") String id) {
    try {
      projetoService.encerrarProjeto(id);
      return ResponseEntity.ok().body("Projeto encerrado com sucesso!");
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
      }
  }

  @GetMapping("/quantidade/{id}")
  public ResponseEntity<Object> contarProjetosAtivosEInativosDoUsuario(@PathVariable("id") String id) {
    try {
      return ResponseEntity.ok().body(projetoService.contarProjetosAtivosEInativosDoUsuario(id));
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body(e.getMessage());
      }
  }
}
