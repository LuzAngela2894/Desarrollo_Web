package com.cadenalagenerica.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_usuarios")
public class UsuariosDTO {

	@Id
	private Integer cedulausuario;
	private String nombreusuario;
	private String emailusuario;
	private String usuario;
	private String contrasena;

	public Integer getCedulausuario() {
		return cedulausuario;
	}

	public void setCedulausuario(Integer cedulausuario) {
		this.cedulausuario = cedulausuario;
	}

	public String getNombreusuario() {
		return nombreusuario;
	}

	public void setNombreusuario(String nombreusuario) {
		this.nombreusuario = nombreusuario;
	}

	public String getEmailusuario() {
		return emailusuario;
	}

	public void setEmailusuario(String emailusuario) {
		this.emailusuario = emailusuario;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

}