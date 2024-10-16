import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Search from '@/components/listPage/Search';
import UserNotification from '@/components/userNofication/UserNofication';
import { useAuth } from '@/contexts/AuthProvider';
import { GetUserInfo } from '@/pages/api/GetUserInfo';
import coinlogo from '@/public/assets/images/coinicons.png';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    sessionStorage.removeItem('totalNotificationCount');
    localStorage.removeItem('RECENT_NOTICES');
    router.push('/login');
  };

  const handleMyStoreClick = async () => {
    const userInfo = await GetUserInfo();
    if (userInfo && userInfo.type === 'employer' && userInfo.shop?.item?.id) {
      router.push(`/mystore/${userInfo.shop.item.id}`);
    } else {
      console.log('ID가 없습니다');
      router.push(`/mystore`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={coinlogo} alt="로고" width={40} height={40} />
        <Link href="/listPage" className={` ${styles.customFont}`}>
          Pay Plus+
        </Link>
        <div className={styles.searchBar}>
          <Search />
        </div>
        <nav className={styles.nav}>
          {!user ? (
            <>
              <Link href="/login">로그인</Link>
              <Link href="/signup">회원가입</Link>
            </>
          ) : user.type === 'employee' ? (
            <>
              <Link href="/DetailedMyPage">내 프로필</Link>
              <div className={styles.logoutContainer}>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  로그아웃
                </button>
                <UserNotification />
              </div>
            </>
          ) : user.type === 'employer' ? (
            <>
              <button onClick={handleMyStoreClick} className={styles.navButton}>
                내 가게
              </button>
              <div className={styles.logoutContainer}>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  로그아웃
                </button>
                <UserNotification />
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
