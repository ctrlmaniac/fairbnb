package me.ctrlmaniac.fairbnb.api.payloads.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CheckTokenRequest {
	private String token;
}
