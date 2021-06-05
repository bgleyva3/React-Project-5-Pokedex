import CardsContainer from "./CardsContainer"
import { useEffect, useState } from "react"
import {set, useForm} from "react-hook-form"
import Pagination from "./Pagination"
import Loading from "./Loading"

const Application = () => {
    const {handleSubmit, register, reset} = useForm()
    const [pokemon, setPokemon] = useState(null)
    const [pokemonName, setPokemonName] = useState(null)
    const [errMessage, setErrMessage] = useState(null)
    const [dataType, setDataType] = useState([])
    const [type, setType] = useState()
    const [pokemonArray, setPokemonArray] = useState([])
    const [allPokemonArray, setAllPokemonArray] = useState([])
    const [count, setCount] = useState(0)
    const [maxPokemon, setMaxPokemon] = useState(3)
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)

    //----------Loads the Dropdown menu with the categories------
    useEffect(() => {
        return (
            fetch(`https://pokeapi.co/api/v2/type`)
                .then(response => response.json())
                .then(data => {
                    setDataType(data.results)
                })
                .catch(e => console.log(e))
        )
    }, [])

    //-------- Returns Pokemon object --------
    useEffect(() => {
        if(pokemonName){
            setLoading(true)
            return(
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                    .then(response => response.json())
                    .then(data => {
                        setPokemon(data)
                        setErrMessage(null)
                    })
                    .catch(() => setErrMessage((`${pokemonName} not found`)))
            )
        }
    }, [pokemonName])


    //----- Crea un arreglo de pokemones por pagina -----
    useEffect(() => {
        if(pokemon){
            if(pokemonArray.length < 4){
                return(
                    setPokemonArray([...pokemonArray, pokemon]),
                    setFlag(!flag),
                    setLoading(false)
                )
            }
        }
    }, [pokemon])
    

    //------ Devuelve un array con todos los pokemones ------
    useEffect(() => {
        if(type){
            return(
                fetch(`https://pokeapi.co/api/v2/type/${type}`)
                    .then(response => response.json())
                    .then(data => {
                        setAllPokemonArray(data.pokemon);
                    })
                    .catch((e) => console.log(e))
            )
        }
    }, [type])


    //-----Devuelve un pokemon del Total de pokemones -----
    useEffect(() => {
        if(allPokemonArray[0]){
            if(count <= maxPokemon){
                if(allPokemonArray[count]){
                    setPokemonName(allPokemonArray[count].pokemon.name)
                    setCount(count+1)
                    
                }
            }
        }
    }, [allPokemonArray, flag])



    const handleSearch = (e, reset) => {
        reset()
        setPokemonName(e.pokemon)
        setPokemonArray([])
        setAllPokemonArray([])
    }

    const dataTypeList = dataType.map(elem => {
        return <option key={elem.name} value={elem.name}>{elem.name}</option>
    })
        
   const handleSelect = (e) => {
       setType(e.target.value)
       setPokemonArray([])
       setCount(0)
       setMaxPokemon(3)
   }
 
   const handlePagination = (e) => {
       setCount((e.selected)*4)
       setMaxPokemon(((e.selected+1)*4)-1)
       setPokemonArray([])
       setFlag(!flag)
   }

    return(
        <div>
            <div className="application-container">
                <h1 className="pokedex-title">POKEDEX</h1>
                <form onSubmit={handleSubmit(e => handleSearch(e, reset))} >
                    <input placeholder="Enter Pokemon" {...register("pokemon", { required: true })} ></input>
                    <button type="submit">Search</button>
                </form>
                <p>{errMessage}</p>
                <select onChange={e => handleSelect(e)} >
                    <option value="DEFAULT">Search by type</option>
                    {dataTypeList}
                </select>
            </div>
            <Pagination numberOfPokemons={allPokemonArray} handlePagination={handlePagination}/>
            <div>
                <div className="loading">
                    {
                        loading ? <Loading /> : <div></div>
                    }       
                </div>
                <CardsContainer pokemonArray={pokemonArray} />
            </div>
        </div>
    )
}

export default Application