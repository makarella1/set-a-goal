import styles from './Button.module.scss';

const Button = ({ children, block, type = 'button' }) => {
  return (
    <button
      className={
        block ? `${styles.button} ${styles.buttonBlock}` : `${styles.button}`
      }
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
