package me.ctrlmaniac.fairbnb.api.controllers.apartment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.fairbnb.api.entities.apartment.Apartment;
import me.ctrlmaniac.fairbnb.api.services.apartment.ApartmentService;

@RestController
@RequestMapping("/apartments")
public class ApartmentController {

	@Autowired
	private ApartmentService service;

	@GetMapping("")
	public ResponseEntity<List<Apartment>> findAll() {
		return new ResponseEntity<>(service.findByOnline(true), HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<Apartment> create(@RequestBody Apartment apt) {
		return new ResponseEntity<>(service.save(apt), HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Apartment> findById(@PathVariable String id) {
		Apartment apt = service.findById(id);

		if (apt != null) {
			return new ResponseEntity<>(apt, HttpStatus.OK);
		}

		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
}
