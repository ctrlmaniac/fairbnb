package me.ctrlmaniac.fairbnb;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;
import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;
import me.ctrlmaniac.fairbnb.entities.appartamento.Camera;
import me.ctrlmaniac.fairbnb.entities.appartamento.Immagine;
import me.ctrlmaniac.fairbnb.entities.appartamento.Recensione;
import me.ctrlmaniac.fairbnb.services.AccountService;
import me.ctrlmaniac.fairbnb.services.appartamento.AppartamentoService;
import me.ctrlmaniac.fairbnb.services.appartamento.ServizioService;
import me.ctrlmaniac.fairbnb.services.appartamento.CameraService;
import me.ctrlmaniac.fairbnb.services.appartamento.ImmagineService;
import me.ctrlmaniac.fairbnb.services.appartamento.RecensioneService;
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

	@Autowired
	private CameraService cameraService;

	@Autowired
	private RecensioneService recensioneService;

	@Autowired
	private ImmagineService immagineService;

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
			List<Servizio> servizi = servizioService.findAll();

			// Aggiunge i servizi
			if (servizi.size() != 0) {
				Collections.shuffle(servizi);

				Servizio ser1 = servizi.get(0);
				Servizio ser2 = servizi.get(1);
				Servizio ser3 = servizi.get(2);
				Servizio ser4 = servizi.get(3);
				Servizio ser5 = servizi.get(4);
				Servizio ser6 = servizi.get(5);
				Servizio ser7 = servizi.get(6);
				Servizio ser8 = servizi.get(7);
				Servizio ser9 = servizi.get(8);
				Servizio ser10 = servizi.get(9);

				List<Servizio> appServizi = new ArrayList<>();
				appServizi.add(ser1);
				appServizi.add(ser2);
				appServizi.add(ser3);
				appServizi.add(ser4);
				appServizi.add(ser5);
				appServizi.add(ser6);
				appServizi.add(ser7);
				appServizi.add(ser8);
				appServizi.add(ser9);
				appServizi.add(ser10);

				appartamento.setServizi(appServizi);
			}

			appartamentoService.save(appartamento);
		}

		// Carica le camere
		for (Camera camera : dataLoader.loadCamereFromCSV("media/csv/camere.csv")) {
			cameraService.save(camera);
		}

		// Carica le recensioni
		for (Recensione recensione : dataLoader.loadRecensioniFromCSV("media/csv/recensioni.csv")) {
			recensioneService.save(recensione);
		}

		// Carica le immagini
		for (Immagine immagine : dataLoader.loadImmaginiFromCSV("media/csv/immagini.csv")) {
			immagineService.save(immagine);
		}

	}

}
