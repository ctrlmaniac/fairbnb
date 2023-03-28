package me.ctrlmaniac.fairbnb.api.repositories.account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.fairbnb.api.entities.account.AccountRole;
import me.ctrlmaniac.fairbnb.api.enums.AccountRoleEnum;

public interface AccountRoleRepo extends JpaRepository<AccountRole, String> {
	Optional<AccountRole> findByAuthority(AccountRoleEnum role);
}