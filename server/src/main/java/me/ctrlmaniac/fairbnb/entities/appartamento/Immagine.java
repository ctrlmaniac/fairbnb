package me.ctrlmaniac.fairbnb.entities.appartamento;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Immagine {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Appartamento appartamento;

	private String immagine;

	public Immagine(Appartamento appartamento, String immagine) {
		this.appartamento = appartamento;
		this.immagine = immagine;
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
		Immagine i = (Immagine) o;
		// field comparison
		return Objects.equals(id, i.getId());
	}

}
