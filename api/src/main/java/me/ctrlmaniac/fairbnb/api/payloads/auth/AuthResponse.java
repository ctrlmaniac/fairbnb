package me.ctrlmaniac.fairbnb.api.payloads.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
	private String email;
	private String accessToken;
}
