import data from './data/data.json';
import styles from './app.module.scss';
import UserCard from './components/UserCard/UserCard';
import CategoryCard from './components/CategoryCard/CategoryCard';
import { useState } from 'react';

export default function App() {
  const [timeline, setTimeline] = useState('daily');

  return (
    <div className={styles.app}>
      <UserCard
        onClick={(e) => {
          setTimeline((e.target as Element).id);
        }}
      />
      <div className={styles.categoryCards}>
        {data.categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            icon={category.img}
            color={category.color}
            current={
              timeline === 'weekly'
                ? category.timeframes.weekly.current
                : timeline === 'monthly'
                ? category.timeframes.monthly.current
                : category.timeframes.daily.current
            }
            previous={
              timeline === 'weekly'
                ? category.timeframes.weekly.previous
                : timeline === 'monthly'
                ? category.timeframes.monthly.previous
                : category.timeframes.daily.previous
            }
            timeframe={
              timeline === 'weekly'
                ? 'Last Week'
                : timeline === 'monthly'
                ? 'Last Month'
                : 'Yesterday'
            }
          />
        ))}
      </div>
    </div>
  );
}
