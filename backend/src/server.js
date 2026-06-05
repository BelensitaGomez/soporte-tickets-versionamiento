const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.get("/hector", (req, res) => {
    res.send("Ruta creada por Hector");
});

app.listen(3001, () => {
  console.log("Servidor iniciado");
});