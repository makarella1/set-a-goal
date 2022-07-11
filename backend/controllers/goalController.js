import asyncHandler from 'express-async-handler';

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals!' });
});
const setGoal = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field!');
  }
  res.status(200).json({ message: 'Create a goal!' });
});
const updateGoal = asyncHandler((req, res) => {
  res
    .status(200)
    .json({ message: `Change the goal with an id of ${req.params.id}` });
});
const deleteGoal = asyncHandler((req, res) => {
  res
    .status(200)
    .json({ message: `Delete the goal with an id of ${req.params.id}` });
});

export default {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
