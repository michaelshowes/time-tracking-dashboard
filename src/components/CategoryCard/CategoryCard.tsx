import styles from './category-card.module.scss';
import { ReactComponent as Ellipsis } from '../../assets/icon-ellipsis.svg';

type CategoryCardProps = {
  title: string;
  timeframe: string;
  current: number;
  previous: number;
  icon: string;
  color: string;
};

export default function CategoryCard({
  title,
  timeframe,
  current,
  previous,
  icon,
  color,
}: CategoryCardProps) {
  return (
    <article
      key={title}
      className={styles.categoryCard}
      style={{ backgroundColor: `${color}` }}
    >
      <div className={styles.icon}>
        <img src={`/images/${icon}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.upper}>
          <div className={styles.title}>{title}</div>
          <button aria-label='Options'>
            <Ellipsis />
          </button>
        </div>
        <div className={styles.lower}>
          <div className={styles.current}>{current}hrs</div>
          <div className={styles.previous}>
            {timeframe} - {previous}hrs
          </div>
        </div>
      </div>
    </article>
  );
}
