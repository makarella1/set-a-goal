import styles from './Button.module.scss';

const Button = ({ children = null, block = false, onClick = () => {} }) => {
  return (
    <button
      className={
        block ? `${styles.button} ${styles.buttonBlock}` : `${styles.button}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
