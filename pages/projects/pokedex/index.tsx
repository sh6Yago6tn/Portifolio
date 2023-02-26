import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { useState } from "react";
import axios from "axios";
import styles from "../../../styles/pokedex.module.css"
import Link from "next/link";
type Poke = {
    name: string;
    url: string;
}

type Props = {
    pokeList: Poke[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const maxPoke = 649;    
    const urlName = "https://pokeapi.co/api/v2/pokemon/";
    const pokemon = await axios.get<Poke[]>(`${urlName}/?limit=${maxPoke}`);

    const pokeList: Poke[] = pokemon.data.results;
    
    return {
        props: {pokeList},
    }
    
}   

export default function Pokedex({pokeList}: InferGetStaticPropsType<typeof getStaticProps>){
    const PAGE_SIZE = 20;
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");

    const totalPages = Math.ceil(pokeList.length / PAGE_SIZE);

    const handlePreviousPage = () => {
        if (page > 1){
          setPage(page - 1);
        }
    }

    const handleNextPage = () => {
        if (page < totalPages) {
        setPage(page + 1);
        }
    }

    const getDisplayList = () => {
        const start = (page - 1 ) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        //console.log(start, end)
        return filterList.slice(start, end);
    }


    const filterList = pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
    //console.log(filterList)

    const searchBtn = e => {
        setName(e.target.value);
    }

    return (
        <div className={styles.pokeBody}>
            <h1 className={styles.title}>Pokedex</h1>
            <div className={styles.pagination}>
                    <button
                        disabled={page === 1}
                        onClick={handlePreviousPage}
                    >
                        Previous
                    </button>
                    <p>
                        Page {page} of {totalPages}
                    </p>
                    <button
                        disabled={page === totalPages}
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>
            <div id={styles.searchBtn}>
            <input 
                    type="text" 
                    placeholder="Search by name" 
                    value={name} 
                    onChange={searchBtn}
                />
            </div>
            <section className={styles.pokedex}>
                <ul>{getDisplayList().map((pokemon) => {
                    //console.log(pokemon.url.split("/")[6]); caçando id
                    const id = pokemon.url.split("/")[6];
                    return(    
                        <li id={styles.cards} key={id}>
                            <img width={120} height={120} 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(id)}.svg`}></img>
                            <p className={styles.id}>#{id}</p>
                            <h2 className={styles.title}>{pokemon.name}</h2>
                            <Link className={styles.btn} href={`/projects/pokedex/${id}`}>Detalhes</Link>
                        </li>
                    )
                })}</ul>
                <div className={styles.pagination}>
                    <button
                        disabled={page === 1}
                        onClick={handlePreviousPage}
                    >
                        Previous
                    </button>
                    <p>
                        Page {page} of {totalPages}
                    </p>
                    <button
                        disabled={page === totalPages}
                        onClick={handleNextPage}
                    >
                        Next
                    </button>
                </div>
            </section>
        </div>
    )
}