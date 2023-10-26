
const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    let result={name: "Štefan"};
    response.render("index", result);
});

app.listen(port, () => {
    console.log("I am ready!");
});