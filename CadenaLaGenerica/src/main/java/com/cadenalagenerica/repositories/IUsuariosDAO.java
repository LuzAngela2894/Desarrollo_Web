package com.cadenalagenerica.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cadenalagenerica.models.UsuariosDTO;

@Repository
public interface IUsuariosDAO extends MongoRepository<UsuariosDTO, Integer> {

	public UsuariosDTO findByUsuario(String usuario);

}