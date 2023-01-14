/* import React from "react"
import ReactDOM from "react-dom/client"
*/
/* new React18 createRoot API*/

    const navElement = (
    <nav>
        <h1>My website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

/*ReactDOM.createRoot(document.getElementById("root")).render(navElement)*/

/*or*/


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navElement) 