package com.academxplore.academxplore.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.ProjetoDetalhesDTO;
import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.repositories.ProjetoRepository;

@Service
public class ProjetoService {
  
  @Autowired
  private ProjetoRepository projetoRepository;

  public List<ProjetoTimelineDTO> listarProjetosAtivos(){
    List<Projeto> projetos = projetoRepository.findByStatus(Status.Ativo);
    List<ProjetoTimelineDTO> projetosDTO = projetos.stream().map(entity -> ProjetoTimelineDTO.mapProjetoTimeline(entity)).collect(Collectors.toList());
    return projetosDTO;
  }

  public ProjetoDetalhesDTO buscarDetalhesPorId(String id) throws Exception {
    try{
      Optional<Projeto> projeto = projetoRepository.findById(id);
      if(!projeto.isPresent())
      {
        throw new Exception("Não possui projetos com o ID indicado!");
      }
      return ProjetoDetalhesDTO.mapProjetoDetalhes(projeto.get());
    }
    catch(Exception e){
      throw new Exception(e.getMessage());
    }
  }
}
