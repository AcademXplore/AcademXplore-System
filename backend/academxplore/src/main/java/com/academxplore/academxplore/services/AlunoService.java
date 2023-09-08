package com.academxplore.academxplore.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.EquipesUsuario;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class AlunoService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  public List<EquipesUsuario> buscarEquipesPorId(String id) throws Exception {
    try{
      Optional<Usuario> usuario = usuarioRepository.findById(id);
      if(!usuario.isPresent())
      {
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      return usuario.get().getEquipes().stream().map(entity -> new EquipesUsuario(entity)).collect(Collectors.toList());
    }
    catch(Exception e)
    {
      throw new Exception(e.getMessage());
    }
  }


}
