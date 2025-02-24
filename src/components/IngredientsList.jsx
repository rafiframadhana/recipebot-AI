export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient} className="ingredient-item">
            {ingredient}
            <button className="delete-btn" onClick={() => props.onDelete(ingredient)}>✖</button>
        </li>
    ));

    const noticeStyle = {
        color: "rgba(107, 114, 128, 0.8)",
        fontSize: "14px"
    }
    

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">{ingredientsListItems}</ul>

            {props.ingredients.length > 3 ? <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div> : <p style={noticeStyle}>*You need atleast 4 Ingredients to generate recipe</p>}

        </section>
    )
}