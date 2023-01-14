// For ArrayOfObjects & to access it -> use .map() method
// Observe variables used. ('s)

function Joke(props) {
    /* inputs : setups & punchlines */
    return (
        <div>
            {props.setups && <h3>Setup: {props.setups}</h3>}
            <p>Punchline: {props.punchlines}</p>
            <hr />
        </div>
    )
}

//import jokesData from "./jokesData"

function App() {
    const jokesData = [
        {
            setup: "I got my daughter a fridge for her birthday.",
            punchline: "I can't wait to see her face light up when she opens it."
        },
        {
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!"
        },
        {
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy."
        },
        {
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm."
        },
        {
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!"
        }
    ]

    const jokeElements = jokesData.map(joke => {
        return <Joke setups={joke.setup} punchlines={joke.punchline} />
    })
/* inputs : setup & punchline */    
/* outputs : setups & punchlines */

    return (
        <div>
            {jokeElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

