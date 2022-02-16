package com.cadenalagenerica.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_proveedores")
public class ProveedoresDTO {

	@Id
	private Integer nitproveedor;
	private String nombreproveedor;
	private String direccionproveedor;
	private String telefonoproveedor;
	private String ciudadproveedor;

	public Integer getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(Integer nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public String getNombreproveedor() {
		return nombreproveedor;
	}

	public void setNombreproveedor(String nombreproveedor) {
		this.nombreproveedor = nombreproveedor;
	}

	public String getDireccionproveedor() {
		return direccionproveedor;
	}

	public void setDireccionproveedor(String direccionproveedor) {
		this.direccionproveedor = direccionproveedor;
	}

	public String getTelefonoproveedor() {
		return telefonoproveedor;
	}

	public void setTelefonoproveedor(String telefonoproveedor) {
		this.telefonoproveedor = telefonoproveedor;
	}

	public String getCiudadproveedor() {
		return ciudadproveedor;
	}

	public void setCiudadproveedor(String ciudadproveedor) {
		this.ciudadproveedor = ciudadproveedor;
	}

}