package me.ctrlmaniac.fairbnb.entities.appartamento;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.ctrlmaniac.fairbnb.entities.Account;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Recensione {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Account recensore;

	@ManyToOne
	@JsonIncludeProperties("id")
	private Appartamento appartamento;

	private int voto;

	private String recensione;

	public Recensione(Account recensore, Appartamento appartamento, int voto, String recensione) {
		this.recensore = recensore;
		this.appartamento = appartamento;
		this.voto = voto;
		this.recensione = recensione;
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
		Recensione r = (Recensione) o;
		// field comparison
		return Objects.equals(id, r.getId());
	}
}
