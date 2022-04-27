# Desarrollo_Web
Ciclo 4 UEB MINTIC Desarrollo de Aplicaciones Web (Java, Spring Boot, JavaScript y React)

**PROYECTO DE DESARROLLO DE APLICACIÓN WEB PARA GESTIONAR LA CADENA DE ALMACENES "LA GENÉRICA"**

Cuando los negocios crecen, diversifican sus productos y servicios, y se expanden geográficamente, es necesario realizar consideraciones y replanteamientos de diseño para su crecimiento a nivel de los sistemas de información con los que cuentan para efectos de que, igualmente, crezcan con ellos y brinden respuestas a las nuevas realidades para mantener la competitividad.

En virtud de lo anterior, retomaremos el proyecto realizado en el ciclo 3, el cual, como sabemos era el desarrollo de software para una tienda que provee productos y servicios, que denominamos “tienda genérica”. Ahora, la tienda se convierte en la cadena de almacenes llamada “La Genérica”, la cual surgió como resultado del gran éxito que tuvo el negocio, por lo que la gerencia determinó ampliar su portafolio de productos y servicios, y expandir su operación inicial, la cual estaba en Bogotá, abriendo sucursales en Cali y Medellín.

EL EQUIPO de beneficiarios del Ciclo 4A, ha sido contratado por la cadena de almacenes para la realización el desarrollo de la aplicación mediante la implementación de los conceptos vistos en este Ciclo, y de acuerdo con las especificaciones de arquitectura, y cumpliendo con los requerimientos que en este documento se estipulan.

Se identifica a continuación los requerimientos para la realización del software, consistente en los siguientes módulos y requerimientos por módulo:

**1. Módulo de Gestión de Productos.**
EL EQUIPO deberá desarrollar el módulo de gestión de los productos que se venden en la tienda, para lo cual se deberá cargar estos productos de un archivo plano (de texto).

**2. Módulo de Gestión de Ventas.**
EL EQUIPO deberá desarrollar el módulo de gestión de las ventas que se realicen en la tienda. El sistema, buscará los datos del cliente por cédula. Posteriormente, el sistema permitirá escribir el código del producto, y se visualizará el nombre de este en pantalla. Se digitará la cantidad a vender, y generará el valor total de venta por producto. El sistema permitirá que se realice la misma operación con otros productos hasta que se le dé la opción de totalizar. En ese momento, el sistema calculará el valor del total de IVA para tres (3) productos, según el valor de IVA definido para cada producto, y luego dará el valor total con IVA.

El sistema deberá registrar la venta con los siguientes datos: código de venta – este es un valor consecutivo, cedula del cliente, valor total de venta, valor de IVA, valor total más IVA, código de producto, cantidad, valor unitario (valor de venta), y valor total por producto en una colección llamada db_ventas. Finalmente, el sistema deberá mostrar un mensaje de confirmación de la transacción.

**3. Módulo de Registro de Compras.**
EL EQUIPO deberá desarrollar el módulo de gestión de los clientes de la tienda, para lo cual se deberán tener las opciones de crear cliente, leer clientes, actualizar datos de cliente, y borrar cliente. Estos datos se almacenarán en la colección llamada db_clientes, y los datos a gestionar son: cedula, nombre completo, dirección, teléfono, y correo electrónico.

**4. Módulo DE Interfaz Web**
EL EQUIPO deberá desarrollar el módulo que permita la interacción del sistema con el usuario, para lo cual, se deberá construir el ingreso al sistema, una vez se haya realizado la validación por nombre de usuario y contraseña. Deberá tenerse un usuario por defecto con el nombre de admininicial, y contraseña admin123456 para su ingreso.

Finalmente, en este módulo se hará la integración de los módulos de productos, compras, y ventas, así como el de la consolidación de tiendas satélite (para el caso de Bogotá), para que el usuario pueda realizar todos los procesos de interacción mediante opciones de menú.

**5. Módulo de Consolidación.**
EL EQUIPO deberá desarrollar el módulo de consolidación de las compras y ventas de las tiendas satélite, y que sean registradas en la ciudad de Bogotá. El sistema deberá realizar las consultas de compras y ventas del día de las ciudades satélites, las cuales se registrarán en la colección llamada db_consolidado, con los siguientes datos: ciudad satélite y valor total ventas.
