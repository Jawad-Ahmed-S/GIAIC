import styles from "./page.module.css"
import Navbar from "@/app/Components/navbar/Navbar"
import object from "./data";
import Link from "next/link";
export default function About() {
    return(
    
    <div className= {styles.body}>
         <Navbar />
         <div className={styles.mainbar}>
            <div className={styles.heading}><h1>Portfolio</h1></div>
         <div className={styles.allTiles}>

            {object.map((object,index)=>(
                <Link href={object.href}>
                <div className={styles.box}>
            <div className={styles.tile}>
                <img src={object.src}  alt="Calculator"></img>
                <div className={styles.desc}>
                    <h2>{object.Name}</h2>
                    <p>{object.Description}</p> 
                </div>
            </div>
            </div>
                </Link>
            ))}
            </div>
         </div>
         </div>
    )
}