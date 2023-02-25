import Link from "next/link"
import style from "../../styles/Projects.module.css"
export default function Projects(){
    return (
        <>
            <section className={style.Projects}>
                <div id={style.one}>
                    <h2>Pokedex</h2>
                    <Link href="/projects/pokedex" >See more</Link>
                </div>
                <div id="two">
                    <h2>Project</h2>
                    <Link href="">See more</Link>
                </div>
                <div id="three">
                    <h2>PROJECT</h2>
                    <Link href="">See more</Link>
                </div>
                <div id="four">
                    <h2 >PROJECT</h2>
                    <Link href="" >See more</Link>
                </div>
                <div id="five">
                    <h2>PROJECT</h2>
                    <Link href="">See more</Link>
                </div>
                <div id="six">
                    <h2 >PROJECT</h2>
                    <Link href="">See more</Link>
                </div>
            </section>
        </>
    )
}