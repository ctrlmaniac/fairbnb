package me.ctrlmaniac.fairbnb.api.repositories.account;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.api.entities.account.Account;

public interface AccountRepo extends JpaRepository<Account, String> {
	Optional<Account> findByEmail(String email);

	boolean existsByEmail(String email);

	List<Account> findByEmailContainingIgnoreCase(String email);
}
