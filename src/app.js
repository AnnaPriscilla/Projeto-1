import express from 'express';
import cors from 'cors';

import usuariosRouter from './routes/usuarios.js';
import receitasRouter from './routes/receitas.js';
import categoriasRouter from './routes/categorias.js';
import ingredientesRouter from './routes/ingredientes.js';
import comentariosRouter from './routes/comentarios.js';

import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.use('/usuarios', usuariosRouter);
app.use('/receitas', receitasRouter);
app.use('/categorias', categoriasRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/comentarios', comentariosRouter);
app.get('/', (req, res) => {
    res.json({
        api: 'Receitas API',
        versao: '1.0'
    });
});

app.use(errorHandler);

export default app;