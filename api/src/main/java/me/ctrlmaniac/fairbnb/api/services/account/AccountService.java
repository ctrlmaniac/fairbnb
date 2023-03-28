package me.ctrlmaniac.fairbnb.api.services.account;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.api.entities.account.Account;
import me.ctrlmaniac.fairbnb.api.entities.account.AccountRole;
import me.ctrlmaniac.fairbnb.api.enums.AccountRoleEnum;
import me.ctrlmaniac.fairbnb.api.repositories.account.AccountRepo;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	private AccountRepo repo;

	@Autowired
	private AccountRoleService roleService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Account> opt = repo.findByEmail(username);

		if (!opt.isPresent()) {
			throw new UsernameNotFoundException(username);
		}

		Account account = opt.get();

		UserDetails user = new User(account.getEmail(), account.getPassword(), account.getAuthorities());

		return user;
	}

	public Account findById(String id) {
		Optional<Account> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Account findByEmail(String email) {
		Optional<Account> opt = repo.findByEmail(email);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Account create(Account payload) {
		AccountRole roleUser = roleService.findByName(AccountRoleEnum.USER);

		payload.addRole(roleUser);

		payload.setPassword(passwordEncoder.encode(payload.getPassword()));

		payload.setAccountNonExpired(payload.isAccountNonExpired());
		payload.setAccountNonLocked(payload.isAccountNonLocked());
		payload.setCredentialsNonExpired(payload.isCredentialsNonExpired());
		payload.setEnabled(payload.isEnabled());

		return repo.save(payload);
	}

	public boolean existsByEmail(String email) {
		return repo.existsByEmail(email);
	}

}
