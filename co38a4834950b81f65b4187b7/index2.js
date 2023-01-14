// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

/* >> IMPERATIVE CODE LOOKS LIKE THIS !!!

const h1 = document.createElement("h1")
h1.textContent = "This is an Imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)  
*/

/* >> DECLARATIVE CODE LOOKS LIKE THIS !!!*/

ReactDOM.render(<h1 className="header">Hello React!</h1>, document.getElementById("root")) 



/* note >>>

# The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.


# The react-dom package also provides modules specific to client and server apps:

    >> react-dom/client
    >> react-dom/server

*/