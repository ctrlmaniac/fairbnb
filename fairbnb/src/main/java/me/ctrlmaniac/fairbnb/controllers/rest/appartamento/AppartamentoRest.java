package me.ctrlmaniac.fairbnb.controllers.rest.appartamento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.fairbnb.services.appartamento.AppartamentoService;
import me.ctrlmaniac.fairbnb.entities.appartamento.Appartamento;

@RestController
@RequestMapping("/api/appartamenti")
public class AppartamentoRest {

	@Autowired
	AppartamentoService appartamentoService;

	@GetMapping("")
	public ResponseEntity<List<Appartamento>> findAll() {
		return new ResponseEntity<>(appartamentoService.findAll(), HttpStatus.OK);
	}

}
