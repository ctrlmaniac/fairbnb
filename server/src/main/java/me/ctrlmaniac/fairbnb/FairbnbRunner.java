package me.ctrlmaniac.fairbnb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.services.AccountService;

@Component
@Slf4j
public class FairbnbRunner implements CommandLineRunner {

	@Autowired
	AccountService accountService;

	@Override
	public void run(String... args) throws Exception {
		log.info("Application started at http://localhost:8080");

		Account account = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", "12345", "USER");
		accountService.save(account);
	}

}
