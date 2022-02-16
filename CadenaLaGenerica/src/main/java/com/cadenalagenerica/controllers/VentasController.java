package com.cadenalagenerica.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cadenalagenerica.models.VentasDTO;
import com.cadenalagenerica.repositories.IVentasDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/api/ventas")
public class VentasController {

	@Autowired
	private IVentasDAO repository;
	
	@PostMapping("/create")
	public void create(@RequestBody  VentasDTO venta) {
		repository.save(venta);
	}
	
	@GetMapping("/read")
	public List<VentasDTO> readAll(){
		return repository.findAll();
	}
	
	@GetMapping("/read/{id}")
	public Optional<VentasDTO> readId(@PathVariable ("id") Integer id) {
		return repository.findById(id);
	}
	
}