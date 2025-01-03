"use client";
import Typed from 'typed.js';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/navbar/Navbar";
import React from 'react';
import Link from 'next/link';
export default function Home() {

  const el = React.useRef(null);

  React.useEffect(() => {//text animation
    const typed = new Typed(el.current, {
      strings: ['Graphic Designer', ' Programmer', 'Web Developer'],
      typeSpeed: 100,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <div className={styles.body}>
        <Navbar />

    <div className={styles.mainbar}>
        <div className={styles.intro}>
            <div className={styles.textDisplay}>
                <h1>
            Hello, my name is <span className={styles.name}>Jawad Ahmed</span><br />
            I am a <span className={styles.profession} ref={el}>
                Graphic Designer
            </span>
        </h1>
      
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a possimus fugit deleniti porro animi ullam quas aspernatur, eum quo delectus autem perspiciatis voluptatum obcaecati itaque accusantium aperiam vel sint officia fugiat at ea numquam? Dolore quos aut, ab similique autem repellendus ipsa harum exercitationem?</p>
                <Link href="../../About"><button className="about">About Me</button></Link>
            </div>
        </div>
        <div className={styles.image}>
            <Image src="/image/profile.png"  width={200} height={200} alt="Picture"></Image>
        </div>
    </div>
</div>
  );
}
