import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import usersRoutes from './routes/users.routes.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(usersRoutes);

app.use(express.static(join(__dirname, '../frontend/dist')))

app.listen(PORT, ()=>{
	console.log(`Servidor en el puerto ${PORT}`)
})