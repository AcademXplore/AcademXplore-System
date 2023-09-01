package com.academxplore.academxplore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.academxplore.academxplore.models.Notificacao;

public interface NotificacaoRepository extends JpaRepository<Notificacao, String> {
    
}
