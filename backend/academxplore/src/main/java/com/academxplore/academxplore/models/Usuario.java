package com.academxplore.academxplore.models;

import java.util.Date;
import java.util.List;

import com.academxplore.academxplore.dto.UsuarioDTO;
import com.academxplore.academxplore.enums.PerfilUsuario;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Usuario {

  @Id
  @GeneratedValue(strategy=GenerationType.UUID)
  private String id;
  @Column(nullable = false)
  private String nome;
  @Column(nullable = false)
  private String cpf;
  @Column(nullable = false)
  private String email;
  private String instituicao;
  @Column(nullable = false)
  private PerfilUsuario perfil;
  private String matricula;
  @Column(nullable = false)
  private String senha;
  private String lattes;
  private String linkedin;
  private String telefone;
  private String curso;
  @Column(name = "sobre_voce")
  private String sobreVoce;
  private String formacao;
  @Column(name = "data_inicio")
  private Date dataInicio;
  @Column(name = "data_fim")
  private Date dataFim;
  @JsonIgnore
  @OneToMany(cascade = CascadeType.ALL, mappedBy = "professor")
  private List<Projeto> projetosProfessor;
  @JsonIgnore
  @OneToMany(cascade = CascadeType.ALL, mappedBy = "coorientador")
  private List<Projeto> projetosCoorientador;
  @JsonIgnore
  @OneToMany(cascade = CascadeType.ALL, mappedBy = "aluno")
  private List<Candidatura> candidaturas;
  @JsonIgnore
  @OneToMany(cascade = CascadeType.ALL, mappedBy = "usuario")
  private List<Notificacao> notificacoes;
  @JsonIgnore
  @OneToMany(cascade=CascadeType.ALL)
  @JoinTable(
    name = "usuario_equipe",
    joinColumns = {@JoinColumn(name = "usuario_id", referencedColumnName="id")},
    inverseJoinColumns = {@JoinColumn(name = "equipe_id", referencedColumnName = "id")}
  )
  private List<Equipe> equipes;
 
  
  
  public Usuario(){}
  public Usuario(String id, String nome, String cpf, String email, String instituicao, PerfilUsuario perfil, String matricula,
      String senha, String lattes, String linkedin, String telefone, String curso, String sobreVoce, String formacao,
      Date dataInicio, Date dataFim) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.instituicao = instituicao;
    this.perfil = perfil;
    this.matricula = matricula;
    this.senha = senha;
    this.lattes = lattes;
    this.linkedin = linkedin;
    this.telefone = telefone;
    this.curso = curso;
    this.sobreVoce = sobreVoce;
    this.formacao = formacao;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }
  public Usuario(UsuarioDTO usuario) {
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
  }
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }
  public String getCpf() {
    return cpf;
  }
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getInstituicao() {
    return instituicao;
  }
  public void setInstituicao(String instituicao) {
    this.instituicao = instituicao;
  }
  public PerfilUsuario getPerfil() {
    return perfil;
  }
  public void setPerfil(PerfilUsuario perfil) {
    this.perfil = perfil;
  }
  public String getMatricula() {
    return matricula;
  }
  public void setMatricula(String matricula) {
    this.matricula = matricula;
  }
  public String getSenha() {
    return senha;
  }
  public void setSenha(String senha) {
    this.senha = senha;
  }
  public String getLattes() {
    return lattes;
  }
  public void setLattes(String lattes) {
    this.lattes = lattes;
  }
  public String getLinkedin() {
    return linkedin;
  }
  public void setLinkedin(String linkedin) {
    this.linkedin = linkedin;
  }
  public String getTelefone() {
    return telefone;
  }
  public void setTelefone(String telefone) {
    this.telefone = telefone;
  }
  public String getCurso() {
    return curso;
  }
  public void setCurso(String curso) {
    this.curso = curso;
  }
  public String getSobreVoce() {
    return sobreVoce;
  }
  public void setSobreVoce(String sobreVoce) {
    this.sobreVoce = sobreVoce;
  }
  public String getFormacao() {
    return formacao;
  }
  public void setFormacao(String formacao) {
    this.formacao = formacao;
  }
  public Date getDataInicio() {
    return dataInicio;
  }
  public void setDataInicio(Date dataInicio) {
    this.dataInicio = dataInicio;
  }
  public Date getDataFim() {
    return dataFim;
  }
  public void setDataFim(Date dataFim) {
    this.dataFim = dataFim;
  }
  public List<Projeto> getProjetosProfessor() {
    return projetosProfessor;
  }
  public void setProjetosProfessor(List<Projeto> projetosProfessor) {
    this.projetosProfessor = projetosProfessor;
  }
   public List<Projeto> getProjetosCoorientador() {
    return projetosCoorientador;
  }
  public void setProjetosCoorientador(List<Projeto> projetosCoorientador) {
    this.projetosCoorientador = projetosCoorientador;
  }
  
  public List<Candidatura> getCandidaturas() {
    return candidaturas;
  }
  public void setCandidaturas(List<Candidatura> candidaturas) {
    this.candidaturas = candidaturas;
  }
  public List<Notificacao> getNotificacoes() {
    return notificacoes;
  }
  public void setNotificacoes(List<Notificacao> notificacoes) {
    this.notificacoes = notificacoes;
  }
  public List<Equipe> getEquipes() {
    return equipes;
  }
  public void setEquipes(List<Equipe> equipes) {
    this.equipes = equipes;
  }
}
