import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login, reset } from '../../features/auth/authSlice';

import { FaSignInAlt } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';

import styles from './Login.module.scss';

const Login = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const changeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = { ...formData };

    dispatch(login(userData));
  };

  return (
    <>
      <section className={styles.heading}>
        <h1>
          <FaSignInAlt className={styles.icon} /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={changeHandler}
            />
          </div>
          <Button block>Login</Button>
        </form>
      </section>
    </>
  );
};

export default Login;
