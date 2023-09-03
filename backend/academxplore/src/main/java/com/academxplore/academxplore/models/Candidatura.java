package com.academxplore.academxplore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="candidaturas")
public class Candidatura {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private String status;
    @Column(nullable = false)
    private String mensagem;
    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    @ManyToOne
    @JoinColumn(name = "aluno_id")
    private Usuario aluno;

    
  
    public Candidatura(){}
    public Candidatura(String id, String status, String mensagem) {
        this.id = id;
        this.status = status;
        this.mensagem = mensagem;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getMensagem() {
        return mensagem;
    }
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    public Projeto getProjeto() {
        return projeto;
    }
    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
      public Usuario getAluno() {
        return aluno;
    }
    public void setAluno(Usuario aluno) {
        this.aluno = aluno;
    }
}
