package com.academxplore.academxplore.services;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.academxplore.academxplore.dto.CandidaturaRequestDTO;
import com.academxplore.academxplore.models.Candidatura;
import com.academxplore.academxplore.models.Projeto;
import com.academxplore.academxplore.models.Usuario;

@Service
public class CandidaturaService {

    public Object criarCandidatura(String id) {
        return null;
    }
    
    @PostMapping
    public Candidatura criarCandidatura(@RequestParam String usuarioId, @RequestParam String projetoId) {
        Candidatura candidatura = new Candidatura();
        
        //precisa?
        try{
            Optional<Usuario> usuario = usuarioRepository.findById(id);
            if(!usuario.isPresent())
            {
                throw new Exception("Não possui usuario com o ID indicado!");
            }
            return usuario.get().getEquipes().stream().map(entity -> new EquipesUsuario(entity)).collect(Collectors.toList());
        }

        Projeto projeto = projetoRepository.findById(projetoId)
            .orElseThrow(() -> new ResourceNotFoundException("Projeto não encontrado com o ID: " + projetoId));

        Usuario usuario = usuarioRepository.findById(usuarioId)
            .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado com o ID: " + usuarioId));
        
        candidatura.setUsuario(usuario);
        candidatura.setProjeto(projeto);
        
        candidatura = candidaturaRepository.save(candidatura);
        
        return candidatura;
    }
}
