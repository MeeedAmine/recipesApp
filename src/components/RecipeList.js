import React, { useContext, useEffect, useState } from 'react'
import { RecipesContext } from './RecipesContext'
import { Container } from '@material-ui/core'
import CircularProgress from "@material-ui/core/CircularProgress"
import CardRecipe from './CardRecipe'
import Masonry from 'react-masonry-css'

const RecipeList = () => {
    const [url, setUrl] = useContext(RecipesContext);
    const [meals, setMeals] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const breakpoints = {
        default:3,
        1100: 2,
        700: 1
      }
    

    useEffect(() => {
        fetch(url, {mode: 'cors'})
           .then(res => {
               if(!res.ok){
                   throw Error('Could not fetch the data for that resource!');
               }
               return res.json()
           })
           .then((data) => {
               setMeals(data);
               setIsPending(false);
               setError(null);
           })
           .catch(err => {
               setError(err.message);
               setIsPending(false);
           });
           console.log('fetch ran')
     }, [url]);

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