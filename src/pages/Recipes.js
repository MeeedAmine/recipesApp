import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { RecipesProvider } from "../components/RecipesContext";

const Recipes = () => {
    return (

        <RecipesProvider>
            <div>
                <SearchBar />
                <RecipeList />
            </div>
        </RecipesProvider> 
     );
}
 
export default Recipes;