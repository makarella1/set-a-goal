import { Oval } from 'react-loader-spinner';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="black"
        secondaryColor="white"
      />
    </div>
  );
};

export default Spinner;
