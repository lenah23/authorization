import { cookies } from 'next/headers';
import styles from '../page.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Header, IndustriesSection } from '../components';
import { redirect } from 'next/navigation';

export default async function Industries() {
  const nextCookies = await cookies();
  const token = nextCookies?.get('synexis-access-token');

  if (!token) {
    redirect('/');
  }

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
      <IndustriesSection industries={industries} />
    </div>
  );
}
