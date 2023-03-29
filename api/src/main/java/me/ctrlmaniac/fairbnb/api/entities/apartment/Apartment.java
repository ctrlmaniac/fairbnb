package me.ctrlmaniac.fairbnb.api.entities.apartment;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.ctrlmaniac.fairbnb.api.entities.account.Account;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Apartment {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Account host;

	private String address;
	private String city;
	private String zipCode;
	private String region;
	private String country;
	private boolean online;

	public Apartment(String address, String city, String zipCode, String region, String country, boolean online) {
		this.address = address;
		this.city = city;
		this.zipCode = zipCode;
		this.region = region;
		this.country = country;
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
		Apartment other = (Apartment) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
