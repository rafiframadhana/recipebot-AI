import recipeDark from "/src/assets/recipe-book-dark.png";
import recipeLight from "/src/assets/recipe-book-light.png";
import Switch from "./ToggleSwitch";

export default function Header(props) {
    return (
        <header>
            <div className="header-logo" onClick={() => window.location.reload()}>
                <img src={props.darkMode ? recipeDark : recipeLight} alt="RecipeBot AI Logo" />
                <p>RecipeBot AI</p>
            </div>
            <div>
                <Switch darkMode={props.darkMode} toggleTheme={props.toggleTheme} />
            </div>
        </header>
    );
}
