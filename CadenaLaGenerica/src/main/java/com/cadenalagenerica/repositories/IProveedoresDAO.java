package com.cadenalagenerica.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cadenalagenerica.models.ProveedoresDTO;

@Repository
public interface IProveedoresDAO extends MongoRepository<ProveedoresDTO, Integer>{

}
