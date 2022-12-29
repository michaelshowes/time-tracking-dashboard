import data from '../../data/data.json';

import styles from './user-card.module.scss';

export default function UserCard() {
  return (
    <article className={styles.userCard}>
      <div className={styles.upper}>
        <img
          src='./src/assets/images/image-jeremy.png'
          className={styles.avatar}
          alt=''
        />
        <div className={styles.header}>
          <div className={styles.eyebrow}>Report for</div>
          <h1 className={styles.name}>{data.name}</h1>
        </div>
      </div>
      <div className={styles.lower}>
        <button className={styles.btn}>Daily</button>
        <button className={styles.btn}>Weekly</button>
        <button className={styles.btn}>Monthly</button>
      </div>
    </article>
  );
}
