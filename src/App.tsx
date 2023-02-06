import React from 'react';
import styles from './assets/styles/App.module.scss';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className={styles.App}>
      <h1>saikyoportfolio</h1>
      <Profile />
    </div>
  );
};

export default App;
