import { useState } from "react"
import ReactPaginate from 'react-paginate';

const Pagination = ({numberOfPokemons, handlePagination}) => {
   

    const totalPages = Math.ceil(numberOfPokemons.length/4)
    /* const pagesArray = []
    for(let i=1; i<=totalPages; i++){
        pagesArray.push(i)
    } */

    /* const paginationList = pagesArray.map(elem => {
        return(
            <button class="button-pagination" key={elem} onClick={() => {return(handlePagination(elem))}} >{elem}</button>
        )
    }) */

    return (
        <div>
            {/* {paginationList} */}
            {
                numberOfPokemons[0] ?
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={totalPages}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePagination}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
                :
                <div></div>
            }
        </div>
    )
}

export default Pagination