const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"))

const homeRoute = require("./routes/client_route.js");
app.use("/", homeRoute);
const apiRoute = require("./routes/api_route.js");
app.use(apiRoute);
app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));