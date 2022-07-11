import mongoose from 'mongoose';

export const conntectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log('Mongo is running properly!'));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
