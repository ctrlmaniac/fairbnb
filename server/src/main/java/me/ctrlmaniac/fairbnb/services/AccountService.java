package me.ctrlmaniac.fairbnb.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.repositories.AccountRepo;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AccountRepo accountRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<GrantedAuthority> authorities = null;
		Account user = accountRepo.findByEmail(username);

		if (user == null) {
			throw new UsernameNotFoundException("User details not found for the user : " + username);
		} else {
			String password = user.getPassword();
			authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority(user.getRole()));

			return new User(username, password, authorities);
		}
	}

	public Account save(Account account) {
		String hashPwd = passwordEncoder.encode(account.getPassword());
		account.setPassword(hashPwd);

		if (account.getRole() == null) {
			account.setRole("USER");
		}

		return accountRepo.save(account);
	}

	public List<Account> findAll() {
		return accountRepo.findAll();
	}

	public Account findById(String id) {
		Optional<Account> opt = accountRepo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Account findByEmail(String email) {
		return accountRepo.findByEmail(email);
	}

	public Account update(String id, Account nuovo) {
		Account old = findById(id);

		if (old != null) {
			old.setEmail(nuovo.getEmail());
			old.setFname(nuovo.getFname());
			old.setLname(nuovo.getLname());

			return accountRepo.save(old);
		}

		return null;
	}

	public Account updatePassword(String id, Account nuovo) {
		Account old = findById(id);

		if (old != null) {
			String hashPwd = passwordEncoder.encode(nuovo.getPassword());
			old.setPassword(hashPwd);

			return accountRepo.save(old);
		}

		return null;
	}
}
