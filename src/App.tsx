import React from 'react';
import styles from './assets/styles/App.module.scss';
import { Hero } from './components/Hero/Hero';
import { Profile } from './components/Profile/Profile';

const App = () => {
  return (
    <div className={styles.App}>
      <Hero />
      <Profile />
    </div>
  );
};

export default App;
