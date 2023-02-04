package me.ctrlmaniac.fairbnb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

	@Value("${admin.email}")
	private String adminEmail;

	@Value("${admin.password}")
	private String adminPassword;

	@Value("${admin.fname}")
	private String adminFname;

	@Value("${admin.lname}")
	private String adminLname;

	@Autowired
	private AccountService accountService;

	@Autowired
	private ServizioService servizioService;

	@Override
	public void run(String... args) throws Exception {
		log.info("Application started at http://localhost:8080");

		// Crea un account Admin
		Account admin = new Account(adminEmail, adminFname, adminLname, adminPassword, "ADMIN");
		accountService.save(admin);

		// Carica i dummy account
		for (Account account : DataLoader.loadAccountFromCSV("media/csv/utenti.csv")) {
			accountService.save(account);
		}

		// Carica i servizi
		for (Servizio servizio : DataLoader.loadServiziFromCSV("media/csv/servizi.csv")) {
			servizioService.save(servizio);
		}
	}

}
