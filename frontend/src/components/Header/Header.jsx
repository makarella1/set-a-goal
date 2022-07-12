import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">SetAGoal</Link>
      </div>
      <ul className={styles.list}>
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
      </ul>
    </header>
  );
};

export default Header;
