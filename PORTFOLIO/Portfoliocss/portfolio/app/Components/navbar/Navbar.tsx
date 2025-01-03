
import React from 'react';
import Link from 'next/link';
import HomeIcon from './Icons/HomeIcon';
import ProfileIcon from './Icons/About';
import CustomIcon from './Icons/Contact';
import FourthIcon from './Icons/Portfolio';
import styles from './Navbar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.text}>
        <div className={styles.logo}>
          <h3>Jawad</h3>
        </div>
        <ul className={styles.list}>
          <li>
            <Link href="../../">
              <div>
                <HomeIcon />
              </div>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="../../About">
              <div>
                <ProfileIcon />
              </div>
              <span className="lg:block sm:hidden">About</span>
            </Link>
          </li>
          <li>
            <Link href="../../portfolio">
              <div>
                <FourthIcon />
              </div>
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="../../Contact">
              <div>
                <CustomIcon />
              </div>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <div className="space"></div>
      </div>
    </div>
  );
}
