const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");

app.use(express.static("markdowns"));
const showdown = require("showdown");
const converter = new showdown.Converter();

const markdown = fs.readFileSync("./markdowns/demo.md", "utf-8", (data, err) => {
  return data;
});
const html = converter.makeHtml(markdown);
fs.writeFileSync("./html/index.html", html, "utf-8");

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, console.log("Server is running on port " + port));
