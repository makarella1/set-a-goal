import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals } from '../../features/goals/goalSlice';
import { reset } from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner/Spinner';

import GoalForm from '../../components/GoalForm/GoalForm';
import GoalItem from '../../components/GoalItem/GoalItem';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, message } = useSelector((state) => state.goals);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className={styles.heading}>
        <h1>Hello, {user?.name ?? 'User'}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />

      <section className={styles.content}>
        {goals.length > 0 ? (
          <div className={styles.goals}>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have no goals buddy :( Change it ASAP!</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
