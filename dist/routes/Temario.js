// esto se llama desestructuracion y sirve solamente para usar una parte de una libreria
// documento, etc.
const { Router } = require("express");
const { crearTemario, devolverTemario } = require("../controllers/Temario");
const temario_router = Router(); // la constante definida va hacer igual a la instancia
// de la clase router.
temario_router.post("/temario", crearTemario);
temario_router.get("/temario", devolverTemario);

module.exports = temario_router;
