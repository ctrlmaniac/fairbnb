package me.ctrlmaniac.fairbnb.entities;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String email;

	private String fname;
	private String lname;
	private String password;

	@Column(columnDefinition = "varchar(255) default 'CUSTOMER'")
	private String role;

	public Account(String email, String fname, String lname, String password, String role) {
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.role = role;
	}

	@Override
	public boolean equals(Object o) {
		// self check
		if (this == o)
			return true;
		// null check
		if (o == null)
			return false;
		// type check and cast
		if (getClass() != o.getClass())
			return false;
		Account account = (Account) o;
		// field comparison
		return Objects.equals(id, account.getId());
	}
}
