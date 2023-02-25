import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className={style.Home}>
        <div>
            <h1>Portfólio</h1>
            <h2>Site to show programming projects and skills.</h2>
        </div>
      </section>
    </>
  )
}
