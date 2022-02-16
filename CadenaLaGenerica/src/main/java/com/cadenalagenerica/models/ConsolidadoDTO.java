package com.cadenalagenerica.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_consolidado")
public class ConsolidadoDTO {

	@Id
	private Integer id;
	private String ciudad;
	private Double totalventas;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Double getTotalventas() {
		return totalventas;
	}

	public void setTotalventas(Double totalventas) {
		this.totalventas = totalventas;
	}

}