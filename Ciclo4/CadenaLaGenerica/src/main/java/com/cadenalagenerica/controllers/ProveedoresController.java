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

import com.cadenalagenerica.models.ProveedoresDTO;
import com.cadenalagenerica.repositories.IProveedoresDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/api/proveedores")
public class ProveedoresController {

	@Autowired
	private IProveedoresDAO repository;
	
	@PostMapping("/create")
	public void create(@RequestBody ProveedoresDTO proveedor) {
		repository.save(proveedor);
	}
	
	@GetMapping("/read")
	public List<ProveedoresDTO> readAll(){
		return repository.findAll();
	}
	
	@GetMapping("/read/{id}")
	public Optional<ProveedoresDTO> readId(@PathVariable ("id") Integer id){
		return repository.findById(id);
	}
	
	@PutMapping("/update")
	public void update(@RequestBody ProveedoresDTO proveedor) {
		repository.save(proveedor);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable ("id") Integer id) {
		repository.deleteById(id);
	}
	
}