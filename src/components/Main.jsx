import {useState, useRef, useEffect} from 'react'
import IngredientsList from './IngredientsList'
import ChefAi from './ChefAi'
import { getRecipeFromMistral } from '../ai'
import Spinner from './Spinner'

export default function Main() {

    const [ingredients, setIngredients] = useState([
        "tomatoes",
        "garlic",
        "basil",
        "olive oil",
        "mozzarella"
    ])
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const recipeSection = useRef(null)
    const laodingSection = useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    useEffect(() => {
        loading && laodingSection.current.scrollIntoView({ behavior: "smooth" })

    }, [loading])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim();

        if (!newIngredient) {
            return;
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function deleteIngredient(ingredientToDelete) {
        setIngredients(prevIngredients => prevIngredients.filter(prevIngredient => prevIngredient !== ingredientToDelete))
        setRecipe("")
    }

    async function getRecipe() {
    setRecipe(""); 
    setLoading(true);

    const responsePromise = getRecipeFromMistral(ingredients);
    await new Promise(resolve => setTimeout(resolve, 3000));
    const response = await responsePromise; 

    setRecipe(response);
    setLoading(false);
}

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>



            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onDelete={deleteIngredient}
                />
            }

            {loading && <div ref={laodingSection} className="loading-container">
                <Spinner />
            </div>}


            {recipe && <ChefAi recipe={recipe} />}

        </main>
    )
}