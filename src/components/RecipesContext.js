import React, {useState, createContext} from 'react'

export const RecipesContext = createContext();

export const RecipesProvider = props => {
    const [searchParams, setSearchParams] = useState({
        random: false,
        byName: ''
    });
    return(
        <RecipesContext.Provider value={[searchParams, setSearchParams]}>
            {props.children}
        </RecipesContext.Provider>
    )
}