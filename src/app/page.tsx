import { cookies } from 'next/headers';
import { Header } from './components';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export default async function Home() {
  const nextCookies = await cookies();
  const token = nextCookies?.get('synexis-access-token');

  if (token) {
    redirect('/industries');
  }

  return (
    <div className={styles['login-page']}>
      <Header />
    </div>
  );
}
