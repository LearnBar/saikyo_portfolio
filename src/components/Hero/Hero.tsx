import React from 'react';
import styles from './Hero.module.scss';
import logoTitle from './hero_logo.png';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.logo}>
        <img src={logoTitle} alt="saikyoportfolio" />
      </h1>
      <h2 className={styles.title}>Welcome to Saikyo portfolio</h2>
      <ul className={styles.list}>
        <li>▶ 1 PLAYER GAME</li>
        <li>2 PLAYER GAME</li>
        <li>3 PLAYER GAME</li>
        <li>4 PLAYER GAME</li>
      </ul>
      <div className={styles.copyright}>
        <p>© 2023 OKAYASUDO CO.,LTD</p>
        <p>MADE IN JAPAN ?</p>
      </div>
    </div>
  );
};
