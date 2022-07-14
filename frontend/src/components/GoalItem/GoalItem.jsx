import { useDispatch } from 'react-redux';
import { deleteGoal } from '../../features/goals/goalSlice';
import { setEditing } from '../../features/goals/goalSlice';

import styles from './GoalItem.module.scss';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteGoal(id));
  };

  const setEditingHandler = (id) => {
    dispatch(setEditing(id));
  };

  return (
    <div className={styles.goal}>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button
        className={styles.edit}
        onClick={setEditingHandler.bind(null, goal._id)}
      >
        Edit
      </button>
      <button
        className={styles.close}
        onClick={deleteHandler.bind(null, goal._id)}
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
