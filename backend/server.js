
const express = require("express");
const app = express();
const dbConfig = require("./db");

const PenghuniRoute = require("./routes/PenghuniRoute");
const BeritaRoute = require("./routes/BeritaRoute");

app.use(express.json());

app.use("/api/penghuni", PenghuniRoute);
app.use("/api/berita", BeritaRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node Server Start using Nodemon"));