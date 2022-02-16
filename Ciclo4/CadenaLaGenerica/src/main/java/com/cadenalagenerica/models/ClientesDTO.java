package com.cadenalagenerica.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_clientes")
public class ClientesDTO {

	@Id
	private Integer cedulacliente;
	private String nombrecliente;
	private String emailcliente;
	private String direccioncliente;
	private String telefonocliente;

	public Integer getCedulacliente() {
		return cedulacliente;
	}

	public void setCedulacliente(Integer cedulacliente) {
		this.cedulacliente = cedulacliente;
	}

	public String getNombrecliente() {
		return nombrecliente;
	}

	public void setNombrecliente(String nombrecliente) {
		this.nombrecliente = nombrecliente;
	}

	public String getEmailcliente() {
		return emailcliente;
	}

	public void setEmailcliente(String emailcliente) {
		this.emailcliente = emailcliente;
	}

	public String getDireccioncliente() {
		return direccioncliente;
	}

	public void setDireccioncliente(String direccioncliente) {
		this.direccioncliente = direccioncliente;
	}

	public String getTelefonocliente() {
		return telefonocliente;
	}

	public void setTelefonocliente(String telefonocliente) {
		this.telefonocliente = telefonocliente;
	}

}