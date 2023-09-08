package com.academxplore.academxplore.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="equipes")
public class Equipe {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String nome;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinTable(
        name = "usuario_equipe",
        joinColumns = {@JoinColumn(name = "equipe_id", referencedColumnName = "id")},
        inverseJoinColumns = {@JoinColumn(name = "usuario_id", referencedColumnName="id")}
    )
    private List<Usuario> usuarios;

    @ManyToOne
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;
    
    public Equipe(){}
    public Equipe(String id, String nome) {
        this.id = id;
        this.nome = nome;
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
     public List<Usuario> getUsuarios() {
        return usuarios;
    }
    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
    public Projeto getProjeto() {
        return projeto;
    }
    public void setProjeto(Projeto projeto) {
        this.projeto = projeto;
    }
}
