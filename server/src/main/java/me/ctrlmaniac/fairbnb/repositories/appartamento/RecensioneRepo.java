package me.ctrlmaniac.fairbnb.repositories.appartamento;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.entities.appartamento.Recensione;

public interface RecensioneRepo extends JpaRepository<Recensione, String> {

}
