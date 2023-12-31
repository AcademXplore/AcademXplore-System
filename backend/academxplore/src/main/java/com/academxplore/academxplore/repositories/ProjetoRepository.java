package com.academxplore.academxplore.repositories;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.Projeto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProjetoRepository extends JpaRepository<Projeto, String> {

  List<Projeto> findByStatus(Status status);

  @Query("SELECT p FROM Projeto p JOIN p.professor u WHERE p.titulo LIKE %?1% OR u.nome LIKE %?1%")
  List<Projeto> findByTituloOrProfessorNome(String pesquisa);

  @Query("SELECT p FROM Projeto p JOIN p.professor up JOIN p.coorientador uc WHERE p.status = ?2 AND (up.id = ?1 OR uc.id = ?1)")
  List<Projeto> findByStatusDoUsuarioProfessor(String usuarioId, Status status);

  // @Query("SELECT p FROM Projeto p JOIN p.professor u WHERE p.titulo LIKE %?1% OR u.nome LIKE %?1%")
  // List<Projeto> findByStatusDoUsuarioAluno(String usuarioId, Status ativo);

}
