package me.ctrlmaniac.fairbnb.api.services.account;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.api.entities.account.AccountRole;
import me.ctrlmaniac.fairbnb.api.enums.AccountRoleEnum;
import me.ctrlmaniac.fairbnb.api.repositories.account.AccountRoleRepo;

@Service
public class AccountRoleService {

	@Autowired
	private AccountRoleRepo repo;

	public AccountRole save(AccountRole role) {
		return repo.save(role);
	}

	public List<AccountRole> findAll() {
		return repo.findAll();
	}

	public AccountRole findByName(AccountRoleEnum role) {
		Optional<AccountRole> opt = repo.findByAuthority(role);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}