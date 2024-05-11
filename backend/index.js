const express = require("express");
// for servers
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cu = require("./Routes/CreateUser");
const pu = require("./Routes/DisplayData");

//middlewares and cross origin routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  //console.log(req.hostname,req.ip)
  next();
});
//Built-in middleware  or body parser
app.use(express.json());
app.use("/api", cu);
app.use('/api', pu);
// use when form data is sending   express.js
app.use(express.urlencoded({ extended: true }));
//routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
//   //res.sendStatus(201);
//   //res.sendFile('C:\Users\agraw\OneDrive\Desktop\react js couse\Go food\mernapp\public\index.html');

// });


       
//

// app.post("/", (req, res) => {
//   res.json({type:'post'});
// });





app.listen(port, () => {
  mongoDB();
  console.log(`Example app listening on port ${port}`);
});
