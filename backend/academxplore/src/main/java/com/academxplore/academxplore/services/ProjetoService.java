package com.academxplore.academxplore.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academxplore.academxplore.dto.CadastroProjetoResquest;
import com.academxplore.academxplore.dto.CandidaturaDTO;
import com.academxplore.academxplore.dto.ProjetoDetalhesDTO;
import com.academxplore.academxplore.dto.ProjetoEquipesDTO;
import com.academxplore.academxplore.dto.ProjetoTimelineDTO;
import com.academxplore.academxplore.enums.Status;
import com.academxplore.academxplore.models.AreaInteresse;
import com.academxplore.academxplore.models.Equipe;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.AreaInteresseRepository;
import com.academxplore.academxplore.repositories.EquipeRepository;
import com.academxplore.academxplore.repositories.ProjetoRepository;
import com.academxplore.academxplore.repositories.UsuarioRepository;

@Service
public class ProjetoService {

  @Autowired
  private ProjetoRepository projetoRepository;

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Autowired
  private AreaInteresseRepository areaInteresseRepository;

  @Autowired
  private EquipeRepository equipeRepository;

  public List<ProjetoTimelineDTO> listarProjetosAtivos() {
    List<Projeto> projetos = projetoRepository.findByStatus(Status.Ativo);
    List<ProjetoTimelineDTO> projetosDTO = projetos.stream()
        .map(entity -> ProjetoTimelineDTO.mapProjetoTimeline(entity)).collect(Collectors.toList());
    return projetosDTO;
  }

  public ProjetoDetalhesDTO buscarDetalhesPorId(String id) throws Exception {
    try {
      Optional<Projeto> projeto = projetoRepository.findById(id);
      if (!projeto.isPresent()) {
        throw new Exception("Não possui projetos com o ID indicado!");
      }
      return ProjetoDetalhesDTO.mapProjetoDetalhes(projeto.get());
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public ProjetoEquipesDTO buscarEquipesPorId(String id) throws Exception {
    try {
      Optional<Projeto> projeto = projetoRepository.findById(id);
      if (!projeto.isPresent()) {
        throw new Exception("Não possui projetos com o ID indicado!");
      }
      return new ProjetoEquipesDTO(projeto.get());
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public List<CandidaturaDTO> buscarCandidaturasPorId(String id) throws Exception {
    try {
      Optional<Projeto> projeto = projetoRepository.findById(id);
      if (!projeto.isPresent()) {
        throw new Exception("Não possui projetos com o ID indicado!");
      }
      return projeto.get().getCandidaturas().stream().map(entity -> new CandidaturaDTO(entity))
          .collect(Collectors.toList());
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public Object buscarPorTituloProfessor(String pesquisa) throws Exception {
    try {
      List<Projeto> projetos = projetoRepository.findByTituloOrProfessorNome(pesquisa);

      return projetos.stream().map(entity -> ProjetoTimelineDTO.mapProjetoTimeline(entity))
          .collect(Collectors.toList());
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public void cadastrarProjeto(CadastroProjetoResquest cadastroResquest) throws Exception {
    try {

      Projeto projeto = new Projeto(
          cadastroResquest.titulo(),
          cadastroResquest.banner(),
          cadastroResquest.descricao(),
          cadastroResquest.objetivo(),
          cadastroResquest.cronograma(),
          Status.Ativo,
          cadastroResquest.recursosNecessarios());
      Optional<Usuario> coorientador = usuarioRepository.findByEmail(cadastroResquest.emailCoorientador());
      if(coorientador.isPresent()){
        projeto.setCoorientador(coorientador.get());
      }
      Optional<Usuario> professor = usuarioRepository.findById(cadastroResquest.professor());
      projeto.setProfessor(professor.get());

      List<AreaInteresse> areasInteresseCadastro = new ArrayList<AreaInteresse>();
      for (String area : cadastroResquest.areasInteresse()) {
        Optional<AreaInteresse> areaBase = areaInteresseRepository.findByNome(area);
        if (!areaBase.isPresent()) {
          AreaInteresse areaInteresseCriado = new AreaInteresse();
          areaInteresseCriado.setNome(area);
          areasInteresseCadastro.add(areaInteresseRepository.save(areaInteresseCriado));
          // List<Projeto> projetos = new ArrayList<Projeto>();
          // projetos.add(projetoCriado);
          // areaInteresseCriado.setProjetos(projetos);
        } else {
          AreaInteresse areaInteresseAdicionarProjeto = areaBase.get();
          areasInteresseCadastro.add(areaInteresseAdicionarProjeto);
          // List<Projeto> projetos = new ArrayList<Projeto>();
          // projetos.add(projetoCriado);
          // areaInteresseAdicionarProjeto.setProjetos(projetos);
          // areaInteresseRepository.save(areaInteresseAdicionarProjeto);
        }
      }
      if (!areasInteresseCadastro.isEmpty()) {
        projeto.setAreasInteresse(areasInteresseCadastro);
      }

      Projeto projetoCriado = projetoRepository.save(projeto);

      for (String equipeNome : cadastroResquest.equipes()) {
        Equipe equipe = new Equipe();
        equipe.setNome(equipeNome);
        equipe.setProjeto(projetoCriado);
        equipeRepository.save(equipe);
      }

    } catch (Exception e) {
       throw new Exception(e.getMessage());
    }
  }
}
