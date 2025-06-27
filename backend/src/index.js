const express = require("express");
const ocorrencias = require("./routes/ocorrencias");
const app = express();
app.use(express.json());
app.use("/api/ocorrencias", ocorrencias);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
module.exports = app;