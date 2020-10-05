import React from 'react'

const Search = ({filtered , handleSetFiltered}) => {
    return (
        <>
            <input 
                type="search" value={filtered} placeholder="Search"
                onChange={e => handleSetFiltered(e.target.value)}
            />
        </>
    )
}

export default Search
