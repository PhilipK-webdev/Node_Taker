const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"))

const homeRoute = require("./routes/client_route.js");
app.use(homeRoute);
app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));