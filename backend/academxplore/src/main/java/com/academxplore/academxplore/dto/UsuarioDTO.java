package com.academxplore.academxplore.dto;

import java.util.Date;

import com.academxplore.academxplore.enums.PerfilUsuario;
import com.academxplore.academxplore.models.Usuario;

import lombok.Data;

@Data
public class UsuarioDTO {
  private String id;
  private String nome;
  private String cpf;
  private String email;
  private String instituicao;
  private PerfilUsuario perfil;
  private String matricula;
  private String lattes;
  private String linkedin;
  private String telefone;
  private String curso;
  private String sobreVoce;
  private String formacao;
  private Date dataInicio;
  private Date dataFim;
  private String foto;
  private String banner;
  public UsuarioDTO(String id, String nome, String cpf, String email, String instituicao, PerfilUsuario perfil,
      String matricula, String lattes, String linkedin, String telefone, String curso, String sobreVoce,
      String formacao, Date dataInicio, Date dataFim, String banner, String foto) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.instituicao = instituicao;
    this.perfil = perfil;
    this.matricula = matricula;
    this.lattes = lattes;
    this.linkedin = linkedin;
    this.telefone = telefone;
    this.curso = curso;
    this.sobreVoce = sobreVoce;
    this.formacao = formacao;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.foto = foto;
    this.banner = banner;
  }
  public UsuarioDTO() {
  }
  public UsuarioDTO(Usuario usuario) {
    this.id = usuario.getId();
    this.nome = usuario.getNome();
    this.cpf = usuario.getCpf();
    this.email = usuario.getEmail();
    this.instituicao = usuario.getInstituicao();
    this.perfil = usuario.getPerfil();
    this.matricula = usuario.getMatricula();
    this.lattes = usuario.getLattes();
    this.linkedin = usuario.getLinkedin();
    this.telefone = usuario.getTelefone();
    this.curso = usuario.getCurso();
    this.sobreVoce = usuario.getSobreVoce();
    this.formacao = usuario.getFormacao();
    this.dataInicio = usuario.getDataInicio();
    this.dataFim = usuario.getDataFim();
    this.foto = usuario.getFoto();
    this.banner = usuario.getBanner();
  }
  
}
