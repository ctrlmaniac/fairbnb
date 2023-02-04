package me.ctrlmaniac.fairbnb.services.appartamento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.entities.appartamento.Immagine;
import me.ctrlmaniac.fairbnb.repositories.appartamento.ImmagineRepo;

@Service
public class ImmagineService {

	@Autowired
	ImmagineRepo immagineRepo;

	public Immagine save(Immagine s) {
		return immagineRepo.save(s);
	}

	public List<Immagine> findAll() {
		return immagineRepo.findAll();
	}
}
