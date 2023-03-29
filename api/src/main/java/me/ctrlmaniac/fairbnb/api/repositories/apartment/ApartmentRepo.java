package me.ctrlmaniac.fairbnb.api.repositories.apartment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.api.entities.apartment.Apartment;

public interface ApartmentRepo extends JpaRepository<Apartment, String> {
	public List<Apartment> findByOnline(boolean online);
}
