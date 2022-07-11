import express from 'express';
import dotenv from 'dotenv';

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
app.use(errorHandler);

app.listen(
  process.env.PORT || 8000,
  console.log(`We're good to go on the port ${process.env.PORT}`)
);
