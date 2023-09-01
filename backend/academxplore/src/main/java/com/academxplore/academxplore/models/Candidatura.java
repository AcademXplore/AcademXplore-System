package com.academxplore.academxplore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="candidaturas")
public class Candidatura {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String idCandidatura;
    @Column(nullable = false)
    private String status;
    @Column(nullable = false)
    private String mensagem;

    public Candidatura(){}
    public Candidatura(String idCandidatura, String status, String mensagem) {
        this.idCandidatura = idCandidatura;
        this.status = status;
        this.mensagem = mensagem;
    }
    public String getIdCandidatura() {
        return idCandidatura;
    }
    public void setIdCandidatura(String idCandidatura) {
        this.idCandidatura = idCandidatura;
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
}
