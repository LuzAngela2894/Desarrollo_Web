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

import com.cadenalagenerica.models.ProductosDTO;
import com.cadenalagenerica.repositories.IProductosDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/api/productos")
public class ProductosController {

	@Autowired
	private IProductosDAO repository;

	@GetMapping("/read/{id}")
	public Optional<ProductosDTO> readid(@PathVariable("id") Integer id){
		return repository.findById(id);
	}
	
	@PostMapping("/create")
	public void create(@RequestBody ProductosDTO producto) {
		repository.save(producto);
	}

	@GetMapping("/read")
	public List<ProductosDTO> readAll() {
		return repository.findAll();
	}	

	@PutMapping("/update")
	public void update(@RequestBody ProductosDTO producto) {
		repository.save(producto);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable ("id") Integer id) {
		repository.deleteById(id);
	}
	
}