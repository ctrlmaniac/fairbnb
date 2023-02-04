package me.ctrlmaniac.fairbnb.utils;

import java.util.List;

import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;

import com.opencsv.CSVReader;

import me.ctrlmaniac.fairbnb.entities.Account;
import me.ctrlmaniac.fairbnb.entities.appartamento.Servizio;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DataLoader {

	public static List<Servizio> loadServiziFromCSV(String filename) {
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

	public static List<Account> loadAccountFromCSV(String filename) {
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
}
