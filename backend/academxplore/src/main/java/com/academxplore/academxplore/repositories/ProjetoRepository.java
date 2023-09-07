package com.academxplore.academxplore.repositories;

import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.Projeto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetoRepository extends JpaRepository<Projeto, String> {

  List<Projeto> findByStatus(Status status);
    
}



