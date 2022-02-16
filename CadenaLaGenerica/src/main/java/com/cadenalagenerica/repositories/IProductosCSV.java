package com.cadenalagenerica.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cadenalagenerica.models.ProductosCSV;

@Repository
public interface IProductosCSV extends MongoRepository<ProductosCSV, Integer>{

}
