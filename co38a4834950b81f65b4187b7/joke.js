function Joke (props) {
    console.log(props)
    return (
        <div>
            { props.setup && <h1>Setup: { props.setup }</h1> }
            <p>Punchline: { props.punchline }</p>
        </div>
    )
}

function App () {
    return (
        <div className="container">
            <h2>😂 Jokes Of The Day 😂</h2>
            <ul className="jokes-container">
                <li className="joke">
                    <Joke 
                        setup = "I got my daughter a fridge for her birthday."
                        punchline = "I can't wait to see her face light up when she opens it."
                    />
                </li>
                <li>
                    <Joke 
                        setup = " How did the hacker escape the police?"
                        punchline = "He just ransomware!"
                    />
                </li>
                <li>
                    <Joke 
                        setup = " Why don't pirates travel on mountain roads?"
                        punchline = "Swarm"
                    />
                </li>
                <li>
                    <Joke 
                        setup = "Why do bees stay in the hive in the winter?"
                        punchline = "I can't wait to see her face light up when she opens it."
                    />
                </li>
                <li>
                    <Joke 
                        setup = "What's the best thing about Switzerland?"
                        punchline = " I don't know, but the flag is a big plus!"
                    />
                </li>
            </ul>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


/* Challenge:

EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?


SOlution:
 
<li>
    <Joke 
        punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally."
    />
</li>

NOTE :  Another Method


<div>
    <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
    <p>Punchline: { props.punchline }</p>
</div>


*/