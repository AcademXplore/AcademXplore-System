package com.academxplore.academxplore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.models.AreaInteresse;
import com.academxplore.academxplore.repositories.AreaInteresseRepository;

@Service
public class AreaInteresseService {

  @Autowired
  private AreaInteresseRepository areaInteresseRepository;

  public List<AreaInteresse> buscarAreaInteresseNome(String nome) throws Exception {
    
    try {
      List<AreaInteresse> areasInteresse = areaInteresseRepository.findByNome(nome);

      return areasInteresse;
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
    
  }

}
