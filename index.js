import express from "express";
import router from "./routes/ordenes.js";
const app = express();

const port = 3000;

app.use(express.json());

app.use('/api/reservas', router);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))