// pages/about.js
"use client";
import Navbar from "@/app/Components/navbar/Navbar";
import styles from "./page.module.css"
import Head from 'next/head'
import { 
  Code2,
  Terminal,
  Layout,
  Code2Icon,
  LucideAtom,
  GitBranchIcon,
  FileJson2
} from 'lucide-react'

export default function About(){
    return(<div className={styles.body}>
      <Head>
        <title>About Me</title>
        </Head>
    <div className={styles.body}>
        <Navbar />
      <div className={styles.container}>
        <section className={styles.introSection}>
          <div className={styles.introBlob}></div>
          <h1 className={styles.introTitle}>About Me</h1>
          <p className={styles.introText}>
            Hello! I'm a passionate Computer Science student with a keen interest in web development 
            and software engineering. I love turning complex problems into simple, beautiful, and 
            intuitive solutions. Currently exploring the vast world of technology and always eager 
            to learn something new.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Educational Journey</h2>
          <div className={styles.educationTimeline}>
            <div className={styles.timelineLine}></div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>2024 - Present</div>
              <div className={styles.timelineDegree}>Bachelor in Computer Science</div>
              <div className={styles.timelineInstitution}>FAST NUCES, Karachi</div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>2022 - 2024</div>
              <div className={styles.timelineDegree}>Intermediate</div>
              <div className={styles.timelineInstitution}>Army Public School & College</div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>2020 - 2022</div>
              <div className={styles.timelineDegree}>Matriculation</div>
              <div className={styles.timelineInstitution}>Gallant Foundation School</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillBox}>
              <Code2Icon className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>HTML5</div>
            </div>
            <div className={styles.skillBox}>
              <Code2 className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>CSS3</div>
            </div>
            <div className={styles.skillBox}>
              <FileJson2 className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>JavaScript</div>
            </div>
            
            <div className={styles.skillBox}>
              <Terminal className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>C/C++</div>
            </div>
            <div className={styles.skillBox}>
              <GitBranchIcon className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>Git</div>
            </div>
            <div className={styles.skillBox}>
              <Layout className={styles.skillIcon} size={32} />
              <div className={styles.skillName}>Tailwind CSS</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    );
}