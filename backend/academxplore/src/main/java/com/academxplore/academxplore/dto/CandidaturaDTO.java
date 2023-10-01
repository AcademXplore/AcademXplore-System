package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.Candidatura;

import lombok.Data;

@Data
public class CandidaturaDTO {
  
  private String id;
  private Status status;
  private UsuarioInformacoesBasicasDTO aluno;

  public CandidaturaDTO(Candidatura candidatura) {
    this.id = candidatura.getId();
    this.status = candidatura.getStatus();
    this.aluno = new UsuarioInformacoesBasicasDTO(candidatura.getAluno()); 
  }
}
