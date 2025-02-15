import { Header } from './components';
import styles from './page.module.scss';

export default async function Home() {
  return (
    <div className={styles['login-page']}>
      <Header />
    </div>
  );
}
