const sqlite3 = require("sqlite3");
const express = require("express");

let db = new sqlite3.Database("./db.sqlite");
const app = express();

function getAlunos(request, response) {
  db.all("SELECT * FROM alunos", (error, data) => {
    if (error) {
      response.status(500).json({
        mensagem: "Algo deu errado!",
        error,
      });
    } else {
      response.status(200).json({
        data,
      });
    }
  });
}

app.get("/", getAlunos);

app.listen(3000);
