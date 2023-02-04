package me.ctrlmaniac.fairbnb.services.appartamento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.repositories.appartamento.AppartamentoRepo;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;

@Service
public class AppartamentoService {

	@Autowired
	private AppartamentoRepo appartamentoRepo;

	public List<Appartamento> findAll() {
		return appartamentoRepo.findAll();
	}
}
