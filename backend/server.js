import express from 'express';
import dotenv from 'dotenv';

import { errorHandler } from './middleware/errorMiddleware.js';
import goalRouter from './routes/goalRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRouter);
app.use(errorHandler);

app.listen(process.env.PORT || 8000, () => {
  console.log('dadada');
});
