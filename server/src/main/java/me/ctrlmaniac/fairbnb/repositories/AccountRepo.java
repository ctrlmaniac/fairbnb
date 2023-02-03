package me.ctrlmaniac.fairbnb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.entities.Account;

public interface AccountRepo extends JpaRepository<Account, String> {

	Account findByEmail(String email);
}
