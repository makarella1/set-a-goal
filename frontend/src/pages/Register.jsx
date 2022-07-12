import { useState, useEffect } from 'react';

import { FaUser } from 'react-icons/fa';

import Button from '../components/Button/Button';

import styles from './Register.module.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const { name, email, password, confirmedPassword } = formData;

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
          <Button type="submit" block>
            Register
          </Button>
        </form>
      </section>
    </>
  );
};

export default Register;
