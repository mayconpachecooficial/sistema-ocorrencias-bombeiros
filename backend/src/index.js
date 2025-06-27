const express = require("express");
const cors = require("cors"); 

const ocorrencias = require("./routes/ocorrencias");

const app = express();
app.use(cors()); 
app.use(express.json());

app.use("/api/ocorrencias", ocorrencias);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));

module.exports = app;
