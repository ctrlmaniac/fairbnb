package me.ctrlmaniac.fairbnb.services.appartamento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.entities.appartamento.Recensione;
import me.ctrlmaniac.fairbnb.repositories.appartamento.RecensioneRepo;

@Service
public class RecensioneService {

	@Autowired
	RecensioneRepo RecensioneRepo;

	public Recensione save(Recensione o) {
		return RecensioneRepo.save(o);
	}

	public List<Recensione> findAll() {
		return RecensioneRepo.findAll();
	}
}
