package com.cadenalagenerica.models;

public class DetalleVentasDTO {

	private Integer cantidadproducto;
	private Integer codigoproducto;
	private Double valorvta;
	private Double valoriva;
	private Double valortotal;

	public Integer getCantidadproducto() {
		return cantidadproducto;
	}

	public void setCantidadproducto(Integer cantidadproducto) {
		this.cantidadproducto = cantidadproducto;
	}

	public Integer getCodigoproducto() {
		return codigoproducto;
	}

	public void setCodigoproducto(Integer codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	public Double getValorvta() {
		return valorvta;
	}

	public void setValorvta(Double valorvta) {
		this.valorvta = valorvta;
	}

	public Double getValoriva() {
		return valoriva;
	}

	public void setValoriva(Double valoriva) {
		this.valoriva = valoriva;
	}

	public Double getValortotal() {
		return valortotal;
	}

	public void setValortotal(Double valortotal) {
		this.valortotal = valortotal;
	}

}