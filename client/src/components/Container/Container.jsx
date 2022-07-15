import styles from './Container.module.scss';

const Container = ({ children = null }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
