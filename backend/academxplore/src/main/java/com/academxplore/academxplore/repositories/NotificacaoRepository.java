package com.academxplore.academxplore.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.academxplore.academxplore.models.Notificacao;

public interface NotificacaoRepository extends JpaRepository<Notificacao, String> {

  @Query("SELECT n FROM Notificacao n JOIN n.usuario u WHERE u.id = ?1")
  List<Notificacao> findByUsuario(String id);
    
}
