import data from '../../data/data.json';
import styles from './user-card.module.scss';

type UserCardProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function UserCard({ onClick }: UserCardProps) {
  return (
    <article className={styles.userCard}>
      <div className={styles.upper}>
        <img src='images/image-jeremy.png' className={styles.avatar} alt='' />
        <div className={styles.header}>
          <div className={styles.eyebrow}>Report for</div>
          <h1 className={styles.name}>{data.name}</h1>
        </div>
      </div>
      <div className={styles.lower}>
        <button id='daily' onClick={(e) => onClick(e)} className={styles.btn}>
          Daily
        </button>
        <button id='weekly' onClick={(e) => onClick(e)} className={styles.btn}>
          Weekly
        </button>
        <button id='monthly' onClick={(e) => onClick(e)} className={styles.btn}>
          Monthly
        </button>
      </div>
    </article>
  );
}
