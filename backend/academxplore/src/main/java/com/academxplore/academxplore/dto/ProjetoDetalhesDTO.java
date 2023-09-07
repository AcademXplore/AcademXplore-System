package com.academxplore.academxplore.dto;

import java.util.List;

import com.academxplore.academxplore.models.Equipe;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;

import lombok.Data;

@Data
public class ProjetoDetalhesDTO {
  private String id;
  private String titulo;
  private String banner;
  private String descricao;
  private String objetivos;
  private String cronograma;
  private Usuario professor;
  private Usuario coorientador;
  private List<Equipe> equipes;

  public ProjetoDetalhesDTO(Projeto projeto) {
    this.id = projeto.getId();
    this.titulo = projeto.getTitulo();
    this.banner = projeto.getBanner();
    this.descricao = projeto.getDescricao();
    this.objetivos = projeto.getObjetivos();
    this.cronograma = projeto.getCronograma();
    this.professor = projeto.getProfessor();
    this.coorientador = projeto.getCoorientador();
    this.equipes = projeto.getEquipes();
  }

  public static ProjetoDetalhesDTO mapProjetoDetalhes(Projeto projeto){
    return new ProjetoDetalhesDTO(projeto);
  }
}
