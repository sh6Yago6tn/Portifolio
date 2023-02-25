import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import styles from "../../styles/pokedex.module.css"
import PokeCard from "@/components/PokeCard";
import Image from "next/image";
import Link from "next/link";
type Poke = {
    id: string;
    name: string;
    url: string;
}

type Props = {
    pokeList: Poke[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const maxPoke = 50;    
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await axios.get<Poke[]>(`${url}/?limit=${maxPoke}`);
    const pokeList: Poke[] = res.data.results;
    
    return {
        props: {pokeList},
    }
    
}   

export default function Pokedex({pokeList}: InferGetStaticPropsType<typeof getStaticProps>){
    return (
        <>
            <h1 className={styles.title}>Pokedex</h1>
                <section className={styles.pokedex}>
                    <ul>{pokeList.map((pokemon, index) =>(
                        <li id={styles.cards} key={index+1}>
                            <img width={120} height={120} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(index+1)}.svg`}></img>
                            <p className={styles.id}>#{(index+1)}</p>
                            <h2 className={styles.title}>{pokemon.name}</h2>
                            <Link className={styles.btn} href={`https://pokeapi.co/api/v2/ability/${(index+1)}`}>Detalhes</Link>
                        </li>
                    
                    ))}</ul>
                </section>
        </>
    )
}