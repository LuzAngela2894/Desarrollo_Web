package com.cadenalagenerica.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cadenalagenerica.models.ClientesDTO;

@Repository
public interface IClientesDAO extends MongoRepository<ClientesDTO, Integer> {
	
}