//import React from "react"
//import Joke from "./Joke"

function App() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div>
            {colors}
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


/*
Challenge: turn the strings in the array into <h3> elements instead
*/


function App2() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
            /* 0r  */

    const colors2 = [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>
    ]
    return (
        <div>
            <h3>{colors}</h3>
            <h3>{colors2}</h3>
        </div>
        
        /* 0r  */

    )
}

ReactDOM.render(<App2 />, document.getElementById("root"))
