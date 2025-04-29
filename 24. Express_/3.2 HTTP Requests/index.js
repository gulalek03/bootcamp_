import express from "express";
const app = express();

app.get ("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact me</h1><p>+993 65599382</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>I love cat and flowers</h1>");
});

app.listen (3000, () => {
    console.log(`Running 3000`);
});