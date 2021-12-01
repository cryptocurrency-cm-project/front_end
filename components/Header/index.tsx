import * as React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { NavLink } from '../NavLink';

export default function BasicTabs() {
  return (
    <section className={styles.Header}>
      <NavLink href='/' exact className='nav-item nav-link'>
        Home
      </NavLink>
      <NavLink href='/page1' exact className='nav-item nav-link'>
        Dashboard
      </NavLink>
    </section>
  );
}
