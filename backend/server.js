import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { errorHandler } from './middleware/errorMiddleware.js';
import goalRouter from './routes/goalRoutes.js';
import userRouter from './routes/userRoutes.js';

import { conntectDB } from './config/db.js';

dotenv.config();

conntectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    );
  });
} else {
  app.get('/', (req, res) => {
    res.send('Set to production!');
  });
}

app.use(errorHandler);

app.listen(
  process.env.PORT || 8000,
  console.log(`We're good to go on the port ${process.env.PORT}`)
);
