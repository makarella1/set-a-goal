import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register, reset } from '../../features/auth/authSlice';

import { FaUser } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';

import styles from './Register.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const { name, email, password, confirmedPassword } = formData;

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

    if (password !== confirmedPassword) {
      toast.error('Passwords do not match!');
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className={styles.heading}>
        <h1>
          <FaUser className={styles.icon} /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={changeHandler}
            />
          </div>
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
          <div className={styles.formGroup}>
            <input
              type="password"
              id="confirmedPassword"
              name="confirmedPassword"
              value={confirmedPassword}
              placeholder="Confirm password"
              onChange={changeHandler}
            />
          </div>
          <Button block>Register</Button>
        </form>
      </section>
    </>
  );
};

export default Register;
