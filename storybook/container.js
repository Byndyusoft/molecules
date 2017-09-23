import React from 'react';
import styles from './container.css';

export default story => <div className={styles.container}>{ story() }</div>;
