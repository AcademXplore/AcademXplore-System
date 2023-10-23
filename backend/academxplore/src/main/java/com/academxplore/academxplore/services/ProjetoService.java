package com.academxplore.academxplore.services;

import java.util.ArrayList;
import java.util.Date;
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
import com.academxplore.academxplore.enums.TipoNotificacao;
import com.academxplore.academxplore.models.AreaInteresse;
import com.academxplore.academxplore.models.Candidatura;
import com.academxplore.academxplore.models.Equipe;
import com.academxplore.academxplore.models.Notificacao;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;
import com.academxplore.academxplore.repositories.AreaInteresseRepository;
import com.academxplore.academxplore.repositories.CandidaturaRepository;
import com.academxplore.academxplore.repositories.EquipeRepository;
import com.academxplore.academxplore.repositories.NotificacaoRepository;
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

  @Autowired
  private NotificacaoRepository notificacaoRepository;

  @Autowired
  private CandidaturaRepository candidaturaRepository;

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
      List<Candidatura> candidaturas = candidaturaRepository.procureCandidaturasAtivasPorProjetoId(id);
      return candidaturas.stream().map(entity -> new CandidaturaDTO(entity))
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
      if (coorientador.isPresent()) {
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
        } else {
          AreaInteresse areaInteresseAdicionarProjeto = areaBase.get();
          areasInteresseCadastro.add(areaInteresseAdicionarProjeto);
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

      String titulo = "Parabéns Novo Projeto";
      String descricao = "Parabéns você criou um novo projeto de nome \"" + projetoCriado.getTitulo() + "\".";
      Date dataCriacao = new Date();
      TipoNotificacao tipoNotificacao = TipoNotificacao.CRIACAO;
      Status statusNotificacao = Status.Ativo;

      Notificacao notificacaoProfessor = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao,
          statusNotificacao, projetoCriado, projetoCriado.getProfessor(), null);
      notificacaoRepository.save(notificacaoProfessor);

    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }

  public void encerrarProjeto(String id) throws Exception {
    try {
      Optional<Projeto> projetoOptional = projetoRepository.findById(id);

      if (projetoOptional.isPresent()) {
        Projeto projeto = projetoOptional.get();

        // Verifica se o projeto já está encerrado
        if (projeto.getStatus() == Status.Inativo) {
          throw new Exception("O projeto já está encerrado.");
        }

        // Define o status do projeto como inativo
        projeto.setStatus(Status.Inativo);

        // Salva o projeto no repositório para atualizar o status
        Projeto projetoEncerrado = projetoRepository.save(projeto);

        String titulo = "Projeto Encerrado";
        String descricao = "O projeto \"" + projetoEncerrado.getTitulo() + "\" foi encerrado.";
        Date dataCriacao = new Date();
        TipoNotificacao tipoNotificacao = TipoNotificacao.ENCERRAMENTO;
        Status statusNotificacao = Status.Ativo;

        // Criar notificação para o professor
        Notificacao notificacaoProfessor = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao,
            statusNotificacao, projetoEncerrado, projetoEncerrado.getProfessor(), null);
        notificacaoRepository.save(notificacaoProfessor);

        // Criar notificações para os alunos do projeto
        for (Equipe equipe : projetoEncerrado.getEquipes()) {
            List<Usuario> alunos = equipe.getUsuarios();

            for(Usuario aluno : alunos ){
              // Criar notificação para o aluno
              Notificacao notificacaoAluno = new Notificacao(titulo, descricao, dataCriacao, tipoNotificacao,
                  statusNotificacao, projetoEncerrado, aluno, null);
              notificacaoRepository.save(notificacaoAluno);
            }
        }

      } else {
        throw new Exception("Projeto não encontrado com o ID indicado!");
      }
    } catch (Exception e) {
      throw new Exception(e.getMessage());
    }
  }
}
