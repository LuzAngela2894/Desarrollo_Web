package com.cadenalagenerica.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cadenalagenerica.models.ConsolidadoDTO;
import com.cadenalagenerica.repositories.IConsolidadoDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/api/consolidado")
public class ConsolidadoController {

	@Autowired
	private IConsolidadoDAO repository;

	@PostMapping("/create")
	public void create(@RequestBody ConsolidadoDTO consolidado) {
		repository.save(consolidado);
	}

	@GetMapping("/read")
	public List<ConsolidadoDTO> readAll() {
		return repository.findAll();
	}
	
}