import React, { useContext, useEffect, useState } from 'react'
import { RecipesContext } from './RecipesContext'
import { Container } from '@material-ui/core'
import CircularProgress from "@material-ui/core/CircularProgress"
import CardRecipe from './CardRecipe'
import Masonry from 'react-masonry-css'
import useFetch from '../useFetch'

const RecipeList = () => {
    const [searchParams, setSearchParams] = useContext(RecipesContext);
    const [url, setUrl] = useState("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    const {data: meals, isPending, error} = useFetch("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    const breakpoints = {
        default:3,
        1100: 2,
        700: 1
      }
    useEffect(() => {
          if(searchParams.random){
            setUrl("http://www.themealdb.com/api/json/v1/1/random.php")
          }
          if(searchParams.byName !== ''){
            setUrl(`http://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams.byName}`)
          }
      }, [searchParams]);
    return ( 
        <Container>
            { error && <div> {error} </div>}
            { isPending && <CircularProgress />}
            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                    {meals &&  meals.meals.map(meal => (
                        <div key={meal.idMeal}>
                            <CardRecipe meal={meal} key={meal.idMeal} />
                        </div>
                    ))}
            </Masonry>
        </Container>
     );
}
 
export default RecipeList;