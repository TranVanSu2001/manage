const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const e = require("express");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("dddddd");
  res.send("hello world");
});

app.get("/class/getClass", (req, res) => {
  db.query("SELECT * FROM class", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.post("/class/postIdEdit", (req, res) => {
  const idEdit = req.body.idEdit;

  db.query(
    "INSERT INTO class (id, name, numberOfStudent) values(?,?,?)",
    [id, name, numOfStu],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/class/getInfoById", (req, res) => {
  const idEdit = req.body.idEdit;
  console.log(`select * from class ${idEdit}`);

  db.query("SELECT * FROM class where id = (?)", [idEdit], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/class/deleteClass", (req, res) => {
  const idDelete = req.body.idDelete;

  db.query("DELETE from class where id = (?)", [idDelete], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/class/editClass", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const numOfStu = req.body.numOfStu;
  const oldId = req.body.oldId;

  db.query(
    "UPDATE class set id = ?, name = ?, numberOfStudent = ? where id = ?",
    [id, name, numOfStu, oldId],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/class/getListId", (req, res) => {
  db.query("select id from class", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.post("/class/add", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const numOfStu = req.body.numOfStu;

  db.query(
    "INSERT INTO class (id, name, numberOfStudent) values(?,?,?)",
    [id, name, numOfStu],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
