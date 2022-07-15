import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createGoal,
  resetEditing,
  editGoal,
} from '../../features/goals/goalSlice';

import Button from '../Button/Button';

import styles from './GoalForm.module.scss';

const GoalForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { isEditing, goals, id } = useSelector((state) => state.goals);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isEditing) {
      dispatch(editGoal({ id, text }));
    } else {
      dispatch(createGoal({ text }));
    }

    setText('');
  };

  const resetEditingHandler = () => {
    dispatch(resetEditing());
  };

  useEffect(() => {
    if (isEditing) {
      const idx = goals.findIndex((goal) => goal._id === id);
      const goalText = goals[idx].text;
      setText(goalText);
    }
  }, [isEditing, goals, id]);

  return (
    <section className={styles.form}>
      <form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <Button type="submit" block>
            {isEditing ? 'Edit' : 'Add a Goal!'}
          </Button>
          {isEditing && (
            <Button onClick={resetEditingHandler} type="button" block>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
