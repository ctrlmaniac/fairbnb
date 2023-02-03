package me.ctrlmaniac.fairbnb.services.appartamento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;
import me.ctrlmaniac.fairbnb.repositories.appartamento.ServizioRepo;

@Service
public class ServizioService {

	@Autowired
	ServizioRepo servizioRepo;

	public Servizio save(Servizio s) {
		return servizioRepo.save(s);
	}
}
