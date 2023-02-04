package me.ctrlmaniac.fairbnb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;
import me.ctrlmaniac.fairbnb.services.AccountService;
import me.ctrlmaniac.fairbnb.services.appartamento.ServizioService;
import me.ctrlmaniac.fairbnb.utils.DataLoader;

@Component
@Slf4j
public class FairbnbRunner implements CommandLineRunner {

	@Autowired
	AccountService accountService;

	@Autowired
	ServizioService servizioService;

	@Override
	public void run(String... args) throws Exception {
		log.info("Application started at http://localhost:8080");

		Account account = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", "12345", "USER");
		accountService.save(account);

		// Carica i servizi
		for (Servizio servizio : DataLoader.loadServiziFromCSV("media/csv/servizi.csv")) {
			servizioService.save(servizio);
		}
	}

}
