package me.ctrlmaniac.fairbnb.repositories.appartamento;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;

public interface AppartamentoRepo extends JpaRepository<Appartamento, String> {

}
