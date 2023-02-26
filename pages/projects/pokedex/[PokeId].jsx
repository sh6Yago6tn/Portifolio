import axios from "axios"
import styles from "../../../styles/pokemon.module.css";

export const getStaticPaths = async () => {
    const maxPoke = 649;    
    const urlName = "https://pokeapi.co/api/v2/pokemon/";
    const pokemon = await axios.get(`${urlName}/?limit=${maxPoke}`);
    
    const paths = pokemon.data.results.map((pokemon, index) => {
        return{
            params: { PokeId: (index+1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.PokeId
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const serializedHeaders = JSON.stringify(Object.fromEntries(res.headers))
    return {
        props: { pokemon: { data: res.data, headers: serializedHeaders } }
    }
}


export default function PokeId({pokemon}){
    const parsedHeaders = JSON.parse(pokemon.headers);
    const types = pokemon.data.types.map(type => type.type.name).join(", ");
    const skills = pokemon.data.abilities.map((skill) => skill.ability.name).join(", ");

    return (
        <section className={styles.pokemon}>
            <div className={styles.wrapper}>
                <p id={styles.name}>{pokemon.data.name}</p>  
                <img width={200} height={200} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.data.id}.svg`}/>
                <p>Type: {types}</p>
                <p>Skills: {skills}</p>
                <p>Height: {pokemon.data.height}</p>
                <p>Weight: {pokemon.data.weight}</p>
            </div>       
        </section>
    )
}   
//<pre>{JSON.stringify(parsedHeaders, null, 2)}</pre>