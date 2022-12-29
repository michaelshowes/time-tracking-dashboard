import data from './data/data.json';
import styles from './app.module.scss';
import UserCard from './components/UserCard/UserCard';
import CategoryCard from './components/CategoryCard/CategoryCard';

export default function App() {
  return (
    <div className={styles.app}>
      <UserCard />
      {data.categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          icon={category.img}
          color={category.color}
          current={category.timeframes.weekly.current}
          previous={category.timeframes.weekly.previous}
        />
      ))}
    </div>
  );
}
