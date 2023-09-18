package com.academxplore.academxplore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.dto.UsuarioInformacoesBasicasDTO;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class ProfessorService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  public List<ProjetoTimelineDTO> buscarProjetosPorId(String id) throws Exception {
    try{
      Optional<Usuario> usuario = usuarioRepository.findById(id);
      if(!usuario.isPresent())
      {
        throw new Exception("Não possui usuario com o ID indicado!");
      }
      List<ProjetoTimelineDTO> projetosDTO = new ArrayList<ProjetoTimelineDTO>();

      List<Projeto> projetoProfessor = usuario.get().getProjetosProfessor();
      List<Projeto> projetoCoorientador = usuario.get().getProjetosCoorientador();

      projetosDTO.addAll(projetoProfessor.stream().map(entity -> ProjetoTimelineDTO.mapProjetoTimeline(entity)).collect(Collectors.toList()));
      projetosDTO.addAll(projetoCoorientador.stream().map(entity -> ProjetoTimelineDTO.mapProjetoTimeline(entity)).collect(Collectors.toList()));

      return projetosDTO;
    }
    catch(Exception e)
    {
      throw new Exception(e.getMessage());
    }
  }

  public List<UsuarioInformacoesBasicasDTO> buscarCoorientadorPorEmail(String email) throws Exception {
    try {
      List<Usuario> usuario = usuarioRepository.findByEmailProfessor(email);
      
      return usuario.stream().map(entity -> new UsuarioInformacoesBasicasDTO(entity)).collect(Collectors.toList());  
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }
}
