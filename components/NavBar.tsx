import Link from "next/link"
import styles from "../styles/NavBar.module.css"
export default function NavBar(){
    return (
        <>
                <nav className={styles.NavBar}>
                    <h1>Portifolio</h1>
                    <ul>
                        <li><Link id={styles.active} href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                </nav>
        </>
    )
}