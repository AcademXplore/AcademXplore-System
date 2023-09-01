package com.academxplore.academxplore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="equipes")
public class Equipe {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String idEquipe;

    @Column(nullable = false)
    private String nome;

    public Equipe(){}
    public Equipe(String idEquipe, String nome) {
        this.idEquipe = idEquipe;
        this.nome = nome;
    }
    public String getIdEquipe() {
        return idEquipe;
    }
    public void setIdEquipe(String idEquipe) {
        this.idEquipe = idEquipe;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
}
