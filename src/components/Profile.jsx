import React from 'react';
import styles from '../assets/styles/Profile.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileTitle}>
        <p className={styles.profileTitle__icon}>
          <BsFillPersonFill />
        </p>
        <h3 className={styles.profileTitle__text}>
          Profile
        </h3>
      </div>
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
