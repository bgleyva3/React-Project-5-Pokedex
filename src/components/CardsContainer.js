import Card from "./Card"
import { useState, useEffect } from "react"

const CardsContainer = ({pokemonArray}) => {

    const pokemonList = pokemonArray.map((elem) => {
        const typeArray = [];
        elem.types.forEach(elem => typeArray.push(elem.type.name))
        return(
            <Card key={elem.name}
                name={elem.name} sprite={elem.sprites.front_default} 
                type={typeArray} hp={elem.stats[0].base_stat} attack={elem.stats[1].base_stat} 
                defense={elem.stats[2].base_stat} speed={elem.stats[5].base_stat}
            />
        )
    })

    return (
        <div className="cards-container">
            {pokemonList}
        </div>
    )
}

export default CardsContainer