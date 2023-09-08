package com.academxplore.academxplore.dto;

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
  // private UsuarioInformacoesBasicasDTO professor;
  // private UsuarioInformacoesBasicasDTO coorientador;
  // private List<UsuarioInformacoesBasicasDTO> alunos;

  public ProjetoDetalhesDTO(Projeto projeto) {
    this.id = projeto.getId();
    this.titulo = projeto.getTitulo();
    this.banner = projeto.getBanner();
    this.descricao = projeto.getDescricao();
    this.objetivos = projeto.getObjetivos();
    this.cronograma = projeto.getCronograma();
    // this.professor = UsuarioInformacoesBasicasDTO.mapUsuarioInformacoesBasicasDTO(projeto.getProfessor());
    // this.coorientador = UsuarioInformacoesBasicasDTO.mapUsuarioInformacoesBasicasDTO(projeto.getCoorientador());
    // pegarUsuario(projeto.getEquipes());
  }

  // public void pegarUsuario(List<Equipe> equipes){
  //   List<UsuarioInformacoesBasicasDTO> usuarios = new ArrayList<UsuarioInformacoesBasicasDTO>();
  //   for(Equipe equipe : equipes){
  //     usuarios.addAll(equipe.getUsuarios().stream().map(entity -> UsuarioInformacoesBasicasDTO.mapUsuarioInformacoesBasicasDTO(entity)).collect(Collectors.toList()));
  //   }
  //   this.alunos = usuarios;
  // }

  public static ProjetoDetalhesDTO mapProjetoDetalhes(Projeto projeto){
    return new ProjetoDetalhesDTO(projeto);
  }
}
