import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';

import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Button from '../Button/Button';

import styles from './Header.module.scss';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">SetAGoal</Link>
      </div>
      <ul className={styles.list}>
        {user ? (
          <li className={styles.item}>
            <Button onClick={logoutHandler}>
              <FaSignOutAlt />
              Logout
            </Button>
          </li>
        ) : (
          <>
            <li className={styles.item}>
              <Link className={styles.link} to="/login">
                <FaSignInAlt className={styles.icon} /> Login
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/register">
                <FaUser className={styles.icon} /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
