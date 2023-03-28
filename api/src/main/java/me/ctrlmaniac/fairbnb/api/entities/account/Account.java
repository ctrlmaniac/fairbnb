package me.ctrlmaniac.fairbnb.api.entities.account;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String email;

	private String firstName;
	private String lastName;
	private String password;
	private boolean enabled;
	private boolean credentialsNonExpired;
	private boolean accountNonExpired;
	private boolean accountNonLocked;

	@ManyToMany(fetch = FetchType.EAGER)
	private Set<AccountRole> authorities = new HashSet<>();

	public Account(String email, String firstName, String lastName, String password, boolean enabled,
			boolean credentialsNonExpired, boolean accountNonExpired, boolean accountNonLocked,
			Set<AccountRole> authorities) {
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.enabled = enabled;
		this.credentialsNonExpired = credentialsNonExpired;
		this.accountNonExpired = accountNonExpired;
		this.accountNonLocked = accountNonLocked;
		this.authorities = authorities;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	public void addRole(AccountRole ruolo) {
		authorities.add(ruolo);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Account other = (Account) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
