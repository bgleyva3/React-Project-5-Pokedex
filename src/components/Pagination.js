import { useState } from "react"

const Pagination = ({numberOfPokemons, handlePagination}) => {
   

    const totalPages = Math.ceil(numberOfPokemons.length/4)
    const pagesArray = []
    for(let i=1; i<=totalPages; i++){
        pagesArray.push(i)
    }

    const paginationList = pagesArray.map(elem => {
        return(
            <button class="button-pagination" key={elem} onClick={() => {return(handlePagination(elem))}} >{elem}</button>
        )
    })

    return (
        <div>
            {paginationList}
        </div>
    )
}

export default Pagination