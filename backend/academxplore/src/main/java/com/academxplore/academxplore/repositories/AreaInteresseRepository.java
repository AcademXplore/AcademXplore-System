package com.academxplore.academxplore.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.academxplore.academxplore.models.AreaInteresse;

public interface AreaInteresseRepository  extends JpaRepository<AreaInteresse, String>{

  @Query("SELECT a FROM AreaInteresse a WHERE a.nome LIKE %?1%")
  List<AreaInteresse> findByNomeArea(String nome);
  
  Optional<AreaInteresse> findByNome(String nome);
}
