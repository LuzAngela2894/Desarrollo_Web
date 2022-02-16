package com.cadenalagenerica.uploadcsv;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import com.cadenalagenerica.models.ProductosDTO;
import com.opencsv.CSVWriter;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

public class OpenCsvUtil {

	public static List<ProductosDTO> parseCsvFile(InputStream is) {
		String[] CSV_HEADER = { "codigoproducto", "nombreproducto", "nitproveedor", "preciocompra", "ivacompra",
				"precioventa" };
		Reader fileReader = null;
		CsvToBean<ProductosDTO> csvToBean = null;
		List<ProductosDTO> productos = new ArrayList<ProductosDTO>();
		try {
			fileReader = new InputStreamReader(is);
			ColumnPositionMappingStrategy<ProductosDTO> mappingStrategy = new ColumnPositionMappingStrategy<ProductosDTO>();
			mappingStrategy.setType(ProductosDTO.class);
			mappingStrategy.setColumnMapping(CSV_HEADER);
			csvToBean = new CsvToBeanBuilder<ProductosDTO>(fileReader).withMappingStrategy(mappingStrategy)
					.withSkipLines(1).withIgnoreLeadingWhiteSpace(true).build();
			productos = csvToBean.parse();
			return productos;
		} catch (Exception e) {
			System.out.println("Reading CSV Error!");
			e.printStackTrace();
		} finally {
			try {
				fileReader.close();
			} catch (IOException e) {
				System.out.println("Closing fileReader/csvParser Error!");
				e.printStackTrace();
			}
		}
		return productos;
	}

	public static void customersToCsv(Writer writer, List<ProductosDTO> productos) {
		String[] CSV_HEADER = { "codigoproducto", "nombreproducto", "nitproveedor", "preciocompra", "ivacompra",
				"precioventa" };
		StatefulBeanToCsv<ProductosDTO> beanToCsv = null;
		try {
			ColumnPositionMappingStrategy<ProductosDTO> mappingStrategy = new ColumnPositionMappingStrategy<ProductosDTO>();
			mappingStrategy.setType(ProductosDTO.class);
			mappingStrategy.setColumnMapping(CSV_HEADER);
			beanToCsv = new StatefulBeanToCsvBuilder<ProductosDTO>(writer).withMappingStrategy(mappingStrategy)
					.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).build();
			beanToCsv.write(productos);
		} catch (Exception e) {
			System.out.println("Writing CSV error!");
			e.printStackTrace();
		}
	}

}