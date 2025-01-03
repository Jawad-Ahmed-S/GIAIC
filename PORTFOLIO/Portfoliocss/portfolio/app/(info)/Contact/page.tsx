import styles from "./page.module.css"
import Navbar from "@/app/Components/navbar/Navbar"
export default function About() {
    return(
    
    <div className= {styles.body}>
         <Navbar />
         <div className={styles.mainbar}>
        <div className={styles.form}>
            <h2>Contact Us</h2>
            <form>

            <input type="email" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Message" id=""></textarea>
            </form>
        </div>
         </div>
        </div>)
    }