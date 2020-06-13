const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"))

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));