package com.academxplore.academxplore.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.academxplore.academxplore.models.Candidatura;
import com.academxplore.academxplore.models.Projeto;

public interface CandidaturaRepository extends JpaRepository<Candidatura, String>{
    @Query("SELECT c FROM Candidatura c JOIN c.projeto p WHERE p.id = ?1 AND c.status = 0")
    List<Candidatura> procureCandidaturasAtivasPorProjetoId(String projetoId);

    @Query("SELECT c FROM Candidatura c JOIN c.projeto p JOIN c.aluno u WHERE u.id = ?1 AND p.id = ?2")
    List<Candidatura> saberSeUsuarioJaSeCandidatouNumProjeto(String usuarioId, String projetoId);
} 
