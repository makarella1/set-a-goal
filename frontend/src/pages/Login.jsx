import { useState, useEffect } from 'react';

import { FaSignInAlt } from 'react-icons/fa';

import Button from '../components/Button/Button';

import styles from './Login.module.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const changeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
          <Button type="submit" block>
            Login
          </Button>
        </form>
      </section>
    </>
  );
};

export default Login;
