package me.ctrlmaniac.fairbnb.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileReader;
import java.time.LocalTime;
import java.util.ArrayList;

import com.opencsv.CSVReader;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;
import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;
import me.ctrlmaniac.fairbnb.entities.appartamento.Camera;
import me.ctrlmaniac.fairbnb.services.AccountService;
import me.ctrlmaniac.fairbnb.services.appartamento.AppartamentoService;
import me.ctrlmaniac.fairbnb.services.appartamento.CameraService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class DataLoader {

	@Autowired
	AccountService accountService;

	@Autowired
	AppartamentoService appartamentoService;

	@Autowired
	CameraService cameraService;

	public List<Servizio> loadServiziFromCSV(String filename) {
		List<Servizio> servizi = new ArrayList<>();
		File file = null;

		try {
			file = ResourceUtils.getFile("classpath:" + filename);
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		if (file != null) {
			try {
				CSVReader csvReader = new CSVReader(new FileReader(file.getPath()));

				String[] values = null;

				while ((values = csvReader.readNext()) != null) {
					servizi.add(new Servizio(values[0]));
				}
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		}

		return servizi;
	}

	public List<Account> loadAccountFromCSV(String filename) {
		List<Account> account = new ArrayList<>();
		File file = null;

		try {
			file = ResourceUtils.getFile("classpath:" + filename);
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		if (file != null) {
			try {
				CSVReader csvReader = new CSVReader(new FileReader(file.getPath()));

				String[] values = null;

				while ((values = csvReader.readNext()) != null) {
					account.add(new Account(values[0], values[1], values[2], values[3], values[4]));
				}
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		}

		return account;
	}

	public List<Appartamento> loadAppartamentiFromCSV(String filename) {
		List<Appartamento> appartamento = new ArrayList<>();
		File file = null;

		try {
			file = ResourceUtils.getFile("classpath:" + filename);
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		if (file != null) {
			try {
				CSVReader csvReader = new CSVReader(new FileReader(file.getPath()));

				String[] values = null;

				while ((values = csvReader.readNext()) != null) {
					Account host = accountService.findByEmail(values[0]);
					String indirizzo = values[1];
					Double costo = Double.parseDouble(values[2]);
					LocalTime checkin = LocalTime.parse(values[3]);
					LocalTime checkout = LocalTime.parse(values[4]);
					boolean feste = Boolean.parseBoolean(values[5]);
					boolean fumare = Boolean.parseBoolean(values[6]);
					boolean animaliDomestici = Boolean.parseBoolean(values[7]);

					Appartamento app = new Appartamento(host, indirizzo, costo, checkin, checkout, feste, fumare,
							animaliDomestici, null, null, null, null);

					appartamento.add(app);
				}
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		}

		return appartamento;
	}

	public List<Camera> loadCamereFromCSV(String filename) {
		List<Camera> camere = new ArrayList<>();
		List<Appartamento> appartamenti = appartamentoService.findAll();
		File file = null;

		try {
			file = ResourceUtils.getFile("classpath:" + filename);
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		if (file != null) {
			try {
				CSVReader csvReader = new CSVReader(new FileReader(file.getPath()));

				String[] values = null;

				while ((values = csvReader.readNext()) != null) {
					Appartamento appartamento = appartamenti.get(Integer.parseInt(values[0]) - 1);
					int lettiSingoli = Integer.parseInt(values[1]);
					int lettiMatrimoniali = Integer.parseInt(values[2]);
					camere.add(new Camera(appartamento, lettiSingoli, lettiMatrimoniali));
				}
			} catch (Exception e) {
				log.error(e.getMessage());
			}
		}

		return camere;
	}
}
