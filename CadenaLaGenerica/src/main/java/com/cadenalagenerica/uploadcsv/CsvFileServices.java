package com.cadenalagenerica.uploadcsv;

import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadenalagenerica.models.ProductosCSV;
import com.cadenalagenerica.repositories.IProductosCSV;

@Service
public class CsvFileServices {

	@Autowired
	IProductosCSV repository;

	public void store(InputStream file) {
		try {
			List<ProductosCSV> lstProductos = ApacheCommonsCsvUtil.parseCsvFile(file);
			repository.saveAll(lstProductos);
		} catch (Exception e) {
			throw new RuntimeException("FAIL! -> message = " + e.getMessage());
		}
	}

	public void loadFile(Writer writer) throws IOException {
		try {
			List<ProductosCSV> productos = (List<ProductosCSV>) repository.findAll();
			ApacheCommonsCsvUtil.customersToCsv(writer, productos);
		} catch (Exception e) {
			throw new RuntimeException("Fail! -> Message = " + e.getMessage());
		}
	}
}