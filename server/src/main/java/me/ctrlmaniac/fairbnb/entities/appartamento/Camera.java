package me.ctrlmaniac.fairbnb.entities.appartamento;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Camera {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private Appartamento appartamento;

	private int lettiSingoli;
	private int lettiMatrimoniali;

	@Transient
	private int letti;

	public Camera(Appartamento appartamento, int lettiSingoli, int lettiMatrimoniali) {
		this.appartamento = appartamento;
		this.lettiSingoli = lettiSingoli;
		this.lettiMatrimoniali = lettiMatrimoniali;
	}

	public int getLetti() {
		return this.lettiSingoli + this.lettiMatrimoniali;
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
		Camera camera = (Camera) o;
		// field comparison
		return Objects.equals(id, camera.getId());
	}

}
