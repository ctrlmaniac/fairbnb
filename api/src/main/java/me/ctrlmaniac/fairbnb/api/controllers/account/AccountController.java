package me.ctrlmaniac.fairbnb.api.controllers.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.fairbnb.api.entities.account.Account;
import me.ctrlmaniac.fairbnb.api.payloads.auth.CheckTokenRequest;
import me.ctrlmaniac.fairbnb.api.services.account.AccountService;
import me.ctrlmaniac.fairbnb.api.utils.JwtTokenUtil;

@RestController
@RequestMapping("/account")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@Autowired
	private JwtTokenUtil jwtUtil;

	@PostMapping("/principal")
	public ResponseEntity<?> getPrincipal(@RequestBody CheckTokenRequest request) {
		String[] userDetails = jwtUtil.getSubject(request.getToken()).split(",");

		Account account = accountService.findById(userDetails[0]);

		return new ResponseEntity<>(account, account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
}
