import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

export default function BasicTabs() {
  const router = useRouter();

  console.log('Debug:router', router);
  return (
    <section className={styles.Header}>
      <Link href='/'>
        <a
          className={`${styles.tab} ${
            router.pathname === '/' ? styles.on : ''
          }`}
        >
          Home
        </a>
      </Link>
      <Link href='/page1'>
        <a
          className={`${styles.tab} ${
            router.pathname === '/page1' ? styles.on : ''
          }`}
        >
          자유게시판
        </a>
      </Link>
    </section>
  );
}
