package com.academxplore.academxplore.models;

import java.util.List;

import com.academxplore.academxplore.enums.Status;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="candidaturas")
@Data
public class Candidatura {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private Status status;
    @Column(length = 9999999)
    private String mensagem;
    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    @ManyToOne
    @JoinColumn(name = "aluno_id")
    private Usuario aluno;
    @ManyToOne
    @JoinColumn(name = "equipe_id")
    private Equipe equipe;
    @JsonIgnore
    @OneToMany(mappedBy = "candidatura")
    private List<Notificacao> notificacoes;

    public Candidatura(){}
    public Candidatura(Projeto projeto, Usuario aluno, Equipe equipe, Status status) {
        this.projeto = projeto;
        this.aluno = aluno;
        this.equipe = equipe;
        this.status = status;
    }
}
