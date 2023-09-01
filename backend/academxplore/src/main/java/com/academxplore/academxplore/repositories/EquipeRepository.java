package com.academxplore.academxplore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.academxplore.academxplore.models.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe, String> {
    
}
