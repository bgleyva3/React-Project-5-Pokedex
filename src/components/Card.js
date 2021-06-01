import { useEffect } from "react"

const Card = ({name, sprite, type, hp, attack, defense, speed}) => {

  
    const typeList = type.map(elem =>{
        return <p key={elem} className="card-text">{elem}</p>
    })
    

    return(
            <div className="pokemon-card">
                <img src={sprite}  alt="..." />
                <div >
                    <h5 >{name}</h5>
                    {typeList}
                    <p>HP:<span>{hp}</span></p>
                    <p>Attack:<span>{attack}</span></p>
                    <p>Defense:<span>{defense}</span></p>
                    <p>Speed:<span>{speed}</span></p>
                </div>
            </div>
    )
}

export default Card