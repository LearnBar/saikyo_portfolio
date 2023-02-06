import React from 'react';
import styles from '../assets/styles/Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h3 className={styles.profile__title}>Profile</h3>
      <ul className={styles.profile__list}>
        <li>名前: Masana</li>
        <li>Lv: 999</li>
        <li>職業: フロントエンドエンジニア</li>
        <li>趣味: ドカ食い</li>
        <li>似ている動物: メガロドン</li>
      </ul>
    </div>
  );
};

export default Profile;
