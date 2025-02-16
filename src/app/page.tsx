import { cookies } from 'next/headers';
import { Header, Industries } from './components';
import styles from './page.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export default async function Home() {
  const nextCookies = await cookies();
  const token = nextCookies?.get('synexis-access-token');

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dicts/industries`,
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    }
  );
  const industries = await response.json();

  return (
    <div className={styles['login-page']}>
      <Header />
      <Industries industries={industries} />
    </div>
  );
}
