const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const e = require("express");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
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

//get infomation by id classs
app.post("/class/getInfoById", (req, res) => {
  const idEdit = req.body.idEdit;

  db.query("SELECT * FROM class where id = (?)", [idEdit], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//get list student by id class
app.post("/class/getListStudentById", (req, res) => {
  const idClass = req.body.idClass;
  console.log(`SELECT * FROM student where id =  ${idClass}`);

  db.query(
    "SELECT * FROM student where classID = (?)",
    [idClass],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

//delete class
app.post("/class/deleteClass", (req, res) => {
  const idDelete = req.body.idDelete;

  db.query("DELETE from class where id = (?)", [idDelete], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//edit infomation class
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

//get list id class
app.get("/class/getListId", (req, res) => {
  db.query("select id from class", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

//add class
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

//get list student by classID
app.post("/class/getListStudentById", (req, res) => {
  const idClass = req.body.idClass;
  console.log(`select * from student where class = ${idClass}`);

  db.query(
    "select * from student where classID = (?)",
    [idClass],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

//-----------------------STUDENT--------------
//get list student information
app.get("/student/getStudent", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

//add student
app.post("/student/add", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const classID = req.body.classID;
  const sex = req.body.sex;

  db.query(
    "INSERT INTO student (id, name, age, email,classID,sex) values(?,?,?,?,?,?)",
    [id, name, age, email, classID, sex],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

//get infomation student by id
app.post("/student/getInfoById", (req, res) => {
  const idEdit = req.body.idEdit;

  db.query("SELECT * FROM student where id = (?)", [idEdit], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//edit student
app.post("/student/editStudent", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const oldId = req.body.oldId;
  const classID = req.body.classID;
  const sex = req.body.sex;

  db.query(
    "UPDATE student set id = ?, name = ?, age = ?, email= ?, sex =?, classID = ?where id = ?",
    [id, name, age, email, sex, classID, oldId],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

//delete student
app.post("/student/deleteStudent", (req, res) => {
  const idDelete = req.body.idDelete;

  db.query("DELETE from student where id = (?)", [idDelete], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
