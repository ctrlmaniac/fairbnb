package me.ctrlmaniac.fairbnb.api.controllers.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.fairbnb.api.entities.account.Account;
import me.ctrlmaniac.fairbnb.api.payloads.auth.AuthRequest;
import me.ctrlmaniac.fairbnb.api.payloads.auth.AuthResponse;
import me.ctrlmaniac.fairbnb.api.payloads.auth.CheckTokenRequest;
import me.ctrlmaniac.fairbnb.api.payloads.auth.RegisterRequest;
import me.ctrlmaniac.fairbnb.api.services.account.AccountService;
import me.ctrlmaniac.fairbnb.api.utils.JwtTokenUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private AccountService accountService;

	@Autowired
	private JwtTokenUtil jwtUtil;

	@PostMapping("")
	public ResponseEntity<?> checkTokenValidity(@RequestBody CheckTokenRequest request) {
		boolean isValid = jwtUtil.validateAccessToken(request.getToken());

		return new ResponseEntity<>(isValid, HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthRequest request) {
		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getEmail(),
					request.getPassword());

			Authentication auth = authManager.authenticate(token);

			User user = (User) auth.getPrincipal();
			Account account = accountService.findByEmail(user.getUsername());

			String accessToken = jwtUtil.generateAccessToken(account);
			AuthResponse response = new AuthResponse(account.getEmail(), accessToken);

			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (BadCredentialsException ex) {
			return new ResponseEntity<>("Account non autorizzato", HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
		if (!accountService.existsByEmail(request.getEmail())) {
			Account account = new Account();
			account.setEmail(request.getEmail());
			account.setPassword(request.getPassword());
			account.setFirstName(request.getFirstName());
			account.setLastName(request.getLastName());

			return new ResponseEntity<>(accountService.create(account), HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>("Account già registrato!", HttpStatus.BAD_REQUEST);
		}
	}
}
