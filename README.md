# ZipCode
## ¿Qué es Zipcode?
**Zipcode** es la segunda parte de la ṕrueba tecnica de Gendra. consiste basicamente en realizar un backend para el manejo de codigos de postales.
La aplicación fue realizada utilizando node Js y Express y mongoDB para la Data

## ¿Cómo funciona?
La aplicacion regresa data dependiendo de los params que pasas por la barra de navegacion:

/getData Regresa todos los valores de la data

/zipcode=zipcode Dado un codigo postal regresa la data de ese codigo

/zipcodeWithSettlements=settlements Dado un asentamiento regresa la data de ese establecimiento

/zipcodeWidtMunicipality=municipality Regresa toda la data de un municipio

/settleMentsWidthZipcode=zipcode Dado un codigo postal regresa todos los asentamientos relacionados con el codigo postal



## Como instalarlo
en el archivo .env deveras poner tus variables de entorno

PORT=3000 //puerto en el cual sera escuchado la aplicación

DB=mongodb://localhost/codezip //nombre de la base de datos

una vez que colocaste tus variables de entorno deberas usar los siguientes comandos

npm install

npm start
