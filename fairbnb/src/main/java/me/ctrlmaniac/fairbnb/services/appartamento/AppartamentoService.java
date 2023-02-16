package me.ctrlmaniac.fairbnb.services.appartamento;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.repositories.appartamento.AppartamentoRepo;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;

@Service
public class AppartamentoService {

	@Autowired
	private AppartamentoRepo repo;

	public List<Appartamento> findAll() {
		return repo.findAll();
	}

	public Appartamento findById(String id) {
		Optional<Appartamento> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Appartamento save(Appartamento appartamento) {
		return repo.save(appartamento);
	}
}
