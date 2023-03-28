package me.ctrlmaniac.fairbnb.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.fairbnb.api.entities.account.AccountRole;
import me.ctrlmaniac.fairbnb.api.enums.AccountRoleEnum;
import me.ctrlmaniac.fairbnb.api.services.account.AccountRoleService;

@Component
@Slf4j
public class SetupRunner implements CommandLineRunner {

	@Autowired
	private AccountRoleService accountRoleService;

	@Override
	public void run(String... args) throws Exception {
		log.info("Running setup...");

		log.info("Adding account roles");
		// Save roles
		for (AccountRoleEnum role : AccountRoleEnum.values()) {
			AccountRole savedRole = accountRoleService.findByName(role);

			if (savedRole == null) {
				accountRoleService.save(new AccountRole(role));
			}
		}

		log.info("setup ended!");
	}

}
