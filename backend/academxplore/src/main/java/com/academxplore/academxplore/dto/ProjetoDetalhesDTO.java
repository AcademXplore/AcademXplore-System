package com.academxplore.academxplore.dto;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.Projeto;

import lombok.Data;

@Data
public class ProjetoDetalhesDTO {
  private String id;
  private String titulo;
  private String banner;
  private String descricao;
  private String objetivos;
  private String cronograma;
  private String recursosNecessarios;
  private Status status;

  public ProjetoDetalhesDTO(Projeto projeto) {
    this.id = projeto.getId();
    this.titulo = projeto.getTitulo();
    this.banner = projeto.getBanner();
    this.descricao = projeto.getDescricao();
    this.objetivos = projeto.getObjetivos();
    this.cronograma = projeto.getCronograma();
    this.recursosNecessarios = projeto.getRecursosNecessarios();
    this.status = projeto.getStatus();
  }

  public static ProjetoDetalhesDTO mapProjetoDetalhes(Projeto projeto){
    return new ProjetoDetalhesDTO(projeto);
  }
}
