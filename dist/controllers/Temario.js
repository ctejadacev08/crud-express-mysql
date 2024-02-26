// let funciona en el scope actual y no es reconocido fuera de el
// var funciona de manera global en el documento.
// const funciona como una constante en la cual no se puede cambiar su valor
// despues de definirlo.

let temarios = [];

const crearTemario = (req, res) => {
  // el request sirve para recibir todo lo que el usuario nos esta mandando.
  console.log(req.body);
  temarios.push(req.body);
  return res.json({
    success: true,
  });
};
const devolverTemario = (req, res) => {
  //devolver todos los temarios
  return res.json({
    success: true,
    content: temarios,
    message: null,
  });
};

module.exports = {
  // llave : valor, cuando coinciden en el mismo nombre solo se coloca uno solo
  crearTemario,
  devolverTemario,
};
