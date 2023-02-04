package me.ctrlmaniac.fairbnb.entities.appartamento;

import java.time.LocalTime;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import me.ctrlmaniac.fairbnb.entities.Account;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Appartamento {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Account host;

	private String indirizzo;
	private double costo;
	private LocalTime checkin;
	private LocalTime checkout;
	private boolean feste;
	private boolean fumare;
	private boolean animaliDomestici;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "appartamento")
	private List<Camera> camere;

	@Transient
	private int numeroCamere;

	@Transient
	private int letti;

	@Transient
	private int ospiti;

	@ManyToMany(fetch = FetchType.EAGER)
	private List<Servizio> servizi;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "appartamento")
	private List<Recensione> recensioni;

	@Transient
	private double voto;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "appartamento")
	private List<Immagine> immagini;

	public Appartamento(Account host, String indirizzo, double costo, LocalTime checkin, LocalTime checkout,
			boolean feste,
			boolean fumare, boolean animaliDomestici, List<Camera> camere, List<Servizio> servizi,
			List<Recensione> recensioni,
			List<Immagine> immagini) {
		this.host = host;
		this.indirizzo = indirizzo;
		this.costo = costo;
		this.checkin = checkin;
		this.checkout = checkout;
		this.feste = feste;
		this.fumare = fumare;
		this.animaliDomestici = animaliDomestici;
		this.camere = camere;
		this.servizi = servizi;
		this.recensioni = recensioni;
		this.immagini = immagini;
	}

	public int getNumeroCamere() {
		int camere = 0;

		if (this.getCamere().size() != 0) {
			for (int index = 0; index < this.getCamere().size(); index++) {
				camere++;
			}
		}

		return camere;
	}

	public int getLetti() {
		int letti = 0;

		if (this.getCamere().size() != 0) {
			for (Camera camera : this.getCamere()) {
				letti += camera.getLetti();
			}
		}

		return letti;
	}

	public int getOspiti() {
		int ospiti = 0;

		if (this.getCamere().size() != 0) {
			for (Camera camera : this.getCamere()) {
				for (int index = 0; index < camera.getLettiMatrimoniali(); index++) {
					ospiti += 2;
				}

				for (int index = 0; index < camera.getLettiSingoli(); index++) {
					ospiti += 1;
				}
			}
		}

		return ospiti;
	}

	public double getVoto() {

		if (this.getRecensioni().size() == 0) {
			return 0;
		} else {
			double totaleVoti = 0;

			for (Recensione recensione : this.getRecensioni()) {
				totaleVoti += recensione.getVoto();
			}

			double avg = totaleVoti / this.getRecensioni().size();

			int scale = (int) Math.pow(10, 1);
			return (double) Math.round(avg * scale) / scale;
		}
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
		Appartamento a = (Appartamento) o;
		// field comparison
		return Objects.equals(id, a.getId());
	}

}
