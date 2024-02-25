// npm i express
const express = require("express"); // esta es la forma de importar librerias y
//archivos en js

class Server {
  constructor() {
    this.app = express(); // crea una instancia de la clase express
    // hace una busqueda en las variables de entorno de la variable PORT y si no hay
    // indica que el puerto sera 5000
    this.puerto = process.env.PORT || 5000;
    this.rutas();
  }

  rutas() {
    this.app.get("/", (req, res) => {
      console.log("El cliente me llama");
      return res.status(200).send("Bienvenido a mi API");
    });
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
