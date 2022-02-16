package com.cadenalagenerica.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_ventas")
public class VentasDTO {

	@Id
	private Integer codigoventa;
	private Integer cedulacliente;
	private String nombrecliente;
	private Double valorventa;
	private Double ivaventa;
	private Double totalventa;
	private ArrayList<DetalleVentasDTO> detalleventa;

	public Integer getCodigoventa() {
		return codigoventa;
	}

	public void setCodigoventa(Integer codigoventa) {
		this.codigoventa = codigoventa;
	}

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

	public Double getValorventa() {
		return valorventa;
	}

	public void setValorventa(Double valorventa) {
		this.valorventa = valorventa;
	}

	public Double getIvaventa() {
		return ivaventa;
	}

	public void setIvaventa(Double ivaventa) {
		this.ivaventa = ivaventa;
	}

	public Double getTotalventa() {
		return totalventa;
	}

	public void setTotalventa(Double totalventa) {
		this.totalventa = totalventa;
	}

	public ArrayList<DetalleVentasDTO> getDetalleventa() {
		return detalleventa;
	}

	public void setDetalleventa(ArrayList<DetalleVentasDTO> detalleventa) {
		this.detalleventa = detalleventa;
	}

}