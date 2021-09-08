import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import CardRecipe from '../components/CardRecipe'
import Masonry from 'react-masonry-css'

function allStorage() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

const Favorites = () => {
    const [meals, setMeals] = useState([]);
    const [values, setValues] = useState(allStorage())
    const breakpoints = {
        default:3,
        1100: 2,
        700: 1
      }
    useEffect(()=>{
        values.map(value => {
            if(meals === null){
                setMeals(JSON.parse(value))
            } else {
                setMeals(prevMeals => [...prevMeals, JSON.parse(value)])
            }
        })
    }, []);
    

    return ( 
        <Container>
            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                    {meals &&  meals.map(meal => (
                        <div key={meal.idMeal}>
                            <CardRecipe meal={meal} 
                              setMeals={setMeals}
                              meals={meals}
                              key={meal.idMeal} />
                        </div>
                    ))}
            </Masonry>
        </Container>
     );
}
 
export default Favorites;