import styles from './Button.module.scss';

const Button = ({
  children = null,
  block = false,
  onClick = () => {},
  type = 'button',
  reversed = false,
}) => {
  return (
    <button
      className={
        block ? `${styles.button} ${styles.buttonBlock}` : `${styles.button}`
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
