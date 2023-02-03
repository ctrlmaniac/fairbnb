package me.ctrlmaniac.fairbnb.entities.appartamento;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Servizio {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private String servizio;

	public Servizio(String servizio) {
		this.servizio = servizio;
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
		Servizio s = (Servizio) o;
		// field comparison
		return Objects.equals(id, s.getId());
	}
}
