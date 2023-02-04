package me.ctrlmaniac.fairbnb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;
import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;
import me.ctrlmaniac.fairbnb.services.AccountService;
import me.ctrlmaniac.fairbnb.services.appartamento.AppartamentoService;
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
	private DataLoader dataLoader;

	@Autowired
	private AccountService accountService;

	@Autowired
	private ServizioService servizioService;

	@Autowired
	private AppartamentoService appartamentoService;

	@Override
	public void run(String... args) throws Exception {
		log.info("Application started at http://localhost:8080");

		// Crea un account Admin
		Account admin = new Account(adminEmail, adminFname, adminLname, adminPassword, "ADMIN");
		accountService.save(admin);

		// Carica i dummy account
		for (Account account : dataLoader.loadAccountFromCSV("media/csv/utenti.csv")) {
			accountService.save(account);
		}

		// Carica i servizi
		for (Servizio servizio : dataLoader.loadServiziFromCSV("media/csv/servizi.csv")) {
			servizioService.save(servizio);
		}

		// Carica gli appartamenti
		for (Appartamento appartamento : dataLoader.loadAppartamentiFromCSV("media/csv/appartamenti.csv")) {
			appartamentoService.save(appartamento);
		}
	}

}
