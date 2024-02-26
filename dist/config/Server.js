// npm i express
const express = require("express"); // esta es la forma de importar librerias y
//archivos en js
const body_parser = require("body-parser");
const temario_router = require("../routes/Temario");

class Server {
  constructor() {
    this.app = express(); // crea una instancia de la clase express
    // hace una busqueda en las variables de entorno de la variable PORT y si no hay
    // indica que el puerto sera 5000
    this.puerto = process.env.PORT || 5000;
    this.configurarBodyParser();
    this.rutas();
  }

  configurarBodyParser() {
    this.app.use(body_parser.json());
  }

  rutas() {
    // encargado de configurar todas las rutas de mi aplicacion
    this.app.get("/", (req, res) => {
      // el request es todo lo que manda el cliente
      // el response es la forma en la cual respondo
      console.log("El cliente me llama");
      return res.status(200).send("Bienvenido a mi API");
    });

    // .use sirve para declarar un numero o subnumero de rutas.
    // utilizamos middleware para utilizar reglas y decorador(api) a nuestras rutas ejm :
    // 127.0.0.1:5000/api/temario
    this.app.use("/api", temario_router);
  }
  iniciarServidor() {
    // se queda escuchando al servidor que se levanta mediante un determinado puerto
    this.app.listen(this.puerto, () => {
      console.log(
        `El servidor se ha levantado exitosamente en el puerto ${this.puerto}`
      );
    });
  }
}

// export default en react en node es module.exports = una clase => cuando exportas una sola cosa (clase,metodo)
module.exports = Server;
// module.exports ={} cuando exportas varias cosas.
