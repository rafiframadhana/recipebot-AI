import ReactMarkdown from 'react-markdown'

export default function ChefAi(props) {

    return (
        <section className='suggested-recipe-container'>
            <h2>RecipeBot AI Recommedation:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>


    )
}