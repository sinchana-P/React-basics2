/* CUSTOM COMPONENTS */

/* import React from "react"
import ReactDOM from "react-dom" */


/* use Pascal case letter */

function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

/* rendering custom components */

ReactDOM.render(< TemporaryName />, document.getElementById("root"))

/*  
>>>
What is PascalCase used for?
PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. 
Software developers often use PascalCase when writing source code to name functions, classes, and other objects. 
PascalCase is similar to camelCase, except the first letter in PascalCase is always capitalized

>>>
Custom components:
Components are independent pieces of functionality that you can reuse in your application, and are the building blocks of all React applications. 
Often, they can be simple JavaScript functions and classes, but you use them as if they were customized HTML elements.

*/