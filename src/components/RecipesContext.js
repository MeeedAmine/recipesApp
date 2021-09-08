import React, {useState, createContext} from 'react'

export const RecipesContext = createContext();

export const RecipesProvider = props => {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v2/1/search.php?s=");
    return(
        <RecipesContext.Provider value={[url, setUrl]}>
            {props.children}
        </RecipesContext.Provider>
    )
}