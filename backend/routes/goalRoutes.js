import { Router } from 'express';
import goalController from '../controllers/goalController.js';

const router = Router();

router.route('/').get(goalController.getGoals).post(goalController.setGoal);
router
  .route('/:id')
  .put(goalController.updateGoal)
  .delete(goalController.deleteGoal);

export default router;
