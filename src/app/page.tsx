import { Header, Industries } from './components';
import styles from './page.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export default async function Home() {
  return (
    <div className={styles['login-page']}>
      <Header />
      <Industries />
    </div>
  );
}
