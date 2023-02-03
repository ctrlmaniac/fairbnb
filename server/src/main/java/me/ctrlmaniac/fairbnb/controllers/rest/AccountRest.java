package me.ctrlmaniac.fairbnb.controllers.rest;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.services.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountRest {

	@Autowired
	AccountService accountService;

	@GetMapping("")
	public ResponseEntity<?> currentUser(Principal principal) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user == null) {
				return new ResponseEntity<String>("Utente non trovato", HttpStatus.NOT_FOUND);
			}

			return new ResponseEntity<Account>(user, HttpStatus.OK);
		}

		return new ResponseEntity<String>("utente non connesso", HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<String> create(@RequestBody Account account) {
		Account newAccount = accountService.save(account);

		if (newAccount.getId() != null) {
			return new ResponseEntity<>("utente creato con successo", HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Errore creazione utente", HttpStatus.BAD_REQUEST);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable String id) {
		Account account = accountService.findById(id);

		if (account != null) {
			return new ResponseEntity<Account>(account, HttpStatus.OK);
		}

		return new ResponseEntity<String>("account non trovato", HttpStatus.NOT_FOUND);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Account> update(@PathVariable String id, @RequestBody Account account) {
		return new ResponseEntity<Account>(accountService.update(id, account), HttpStatus.OK);
	}

	@PutMapping("/password-reset/{id}")
	public ResponseEntity<Account> updatePassword(@PathVariable String id, @RequestBody Account account) {
		Account newAccount = accountService.updatePassword(id, account);
		return new ResponseEntity<>(newAccount, HttpStatus.OK);
	}

}
