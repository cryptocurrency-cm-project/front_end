import * as React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export default function BasicTabs() {
  return (
    <section className={styles.Header}>
      <Link href='/'>Home</Link>
      <Link href='/page1'>Dashboard</Link>
    </section>
  );
}
