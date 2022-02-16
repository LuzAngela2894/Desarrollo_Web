package com.cadenalagenerica.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cadenalagenerica.models.ClientesDTO;
import com.cadenalagenerica.repositories.IClientesDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/api/clientes")
public class ClientesController {

	@Autowired
	private IClientesDAO repository;

	@GetMapping("/read/{id}")
	public Optional<ClientesDTO> readid(@PathVariable("id") Integer id){
		return repository.findById(id);
	}
	
	@PostMapping("/create")
	public void create(@RequestBody ClientesDTO c) {
		repository.save(c);
	}

	@GetMapping("/read")
	public List<ClientesDTO> readAll() {
		return repository.findAll();
	}

	@PutMapping("/update")
	public void update(@RequestBody ClientesDTO c) {
		repository.save(c);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable ("id") Integer id) {
		repository.deleteById(id);
	}

}