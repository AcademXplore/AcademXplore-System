package com.academxplore.academxplore.models;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "usuarios")
public class Usuario implements UserDetails{

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
  @OneToMany(mappedBy = "professor")
  private List<Projeto> projetosProfessor;
  @JsonIgnore
  @OneToMany(mappedBy = "coorientador")
  private List<Projeto> projetosCoorientador;
  @JsonIgnore
  @OneToMany(mappedBy = "aluno")
  private List<Candidatura> candidaturas;
  @JsonIgnore
  @OneToMany(mappedBy = "usuario")
  private List<Notificacao> notificacoes;
  @JsonIgnore
  @OneToMany(cascade=CascadeType.ALL)
  @JoinTable(
    name = "usuario_equipe",
    joinColumns = {@JoinColumn(name = "usuario_id", referencedColumnName="id")},
    inverseJoinColumns = {@JoinColumn(name = "equipe_id", referencedColumnName = "id")}
  )
  private List<Equipe> equipes;
  private String foto; 
  private String banner; 
  
  
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

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    if(this.perfil == PerfilUsuario.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_PROFESSOR"), new SimpleGrantedAuthority("ROLE_ALUNO"));
    else if(this.perfil == PerfilUsuario.PROFESSOR) return List.of(new SimpleGrantedAuthority("ROLE_PROFESSOR"));
    else return List.of(new SimpleGrantedAuthority("ROLE_ALUNO"));
  }
  @Override
  public String getPassword() {
    return this.senha;
  }
  @Override
  public String getUsername() {
    return this.email;
  }
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
  @Override
  public boolean isEnabled() {
    return true;
  }
}
