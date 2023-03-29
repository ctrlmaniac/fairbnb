package me.ctrlmaniac.fairbnb.api.services.apartment;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.api.entities.apartment.Apartment;
import me.ctrlmaniac.fairbnb.api.repositories.apartment.ApartmentRepo;

@Service
public class ApartmentService {

	@Autowired
	private ApartmentRepo repo;

	public Apartment save(Apartment apt) {
		return repo.save(apt);
	}

	public List<Apartment> findAll() {
		return repo.findAll();
	}

	public List<Apartment> findByOnline(boolean online) {
		return repo.findByOnline(online);
	}

	public Apartment findById(String id) {
		Optional<Apartment> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}
