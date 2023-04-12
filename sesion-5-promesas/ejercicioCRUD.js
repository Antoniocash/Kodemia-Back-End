//1. Crear una funcion que permita leer el archivo e imprimir en consola los koders
const fs = require('fs').promises

const read = () => {
    fs.promises.readFile('/home/antnio/back-end/sesion-5-promesas/koders2.json', (error, content) => {
  if (error) throw error;
  console.log(content.toString());
})};

read();