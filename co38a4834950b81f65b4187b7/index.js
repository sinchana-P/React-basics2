/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
/* 
            ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root")
)           
*/
/* why React? It's Composable! */

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)


/* note >>>

Several React components can be combined to produce another React component. 
This is one of the best features of React. It's a simple concept with great advantages. 
Composability enables abstraction and allows us to understand code without having to care about all the details all the time.


>>>
What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

For example, the DOM specifies that the querySelectorAll method in this code snippet must return a list of all the <p> elements in the document:

const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);



>>>
What's the difference between React and React-dom?
Answer. React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.
Think again. As the name implies, ReactDOM is the glue between React and the DOM.


>>>
What is DOM and why do we need it?
Image result for what is DOM
The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser. 
It allows a language (JavaScript) to manipulate, structure, and style your website.


>>>
How does the DOM work?
Image result for what is DOM
The DOM is a tree-like representation of the web page that gets loaded into the browser. 
It represents the web page using a‌‌ series of objects. 
The main object is the document object, which in turn houses other objects which also house their own objects, and so on.


>>>
What are the three types of DOM?
The W3C DOM standard is separated into 3 different parts:

    Core DOM - standard model for all document types.
    XML DOM - standard model for XML documents.
    HTML DOM - standard model for HTML documents.


>>>
What are the advantages of DOM?
The general advantages of DOM include:

    Data persists in memory.
    You can go forwards and backwards in the tree (random access)
    You can make changes directly to the tree in memory.


>>>
What are DOM elements?
In the HTML DOM, the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.

>>>
What is DOM in react?
Image result
The DOM (Document Object Model) represents the web page as a tree structure. 
Any piece of HTML that we write is added as a node, to this tree. 
With JavaScript, we can access any of these nodes (HTML elements) and update their styles, attributes, and so on.

>>>
What is difference between React and React DOM?
The react package holds the react source for components, state, props and all the code that is react. 
The react-dom package as the name implies is the glue between React and the DOM. 
Often, you will only use it for one single thing: mounting your application to the index.


>>>
wt is API ?
API is the acronym for Application Programming Interface.
which is a software intermediary that allows two applications to talk to each other.

>>>
What Is an Example of an API?
-> When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. This is what an API is - all of this happens via API.

To explain this better, let us take a familiar example.
Imagine you’re sitting at a table in a restaurant with a menu of choices to order from. The kitchen is the part of the “system” that will prepare your order.
 What is missing is the critical link to communicate your order to the kitchen and deliver your food back to your table. 
 That’s where the waiter or API comes in. The waiter is the messenger – or API – that takes your request or order and tells the kitchen – the system – what to do. 
 Then the waiter delivers the response back to you; in this case, it is the food.

Here is a real-life API example. 
You may be familiar with the process of searching flights online. 
Just like the restaurant, you have a variety of options to choose from, including different cities, departure and return dates, and more. 
Let us imagine that you’re booking you are flight on an airline website. You choose a departure city and date, a return city and date, cabin class, as well as other variables. 
In order to book your flight, you interact with the airline’s website to access their database and see if any seats are available on those dates and what the costs might be.

*** However, what if you are not using the airline’s website––a channel that has direct access to the information? What if you are using an online travel service, such as Kayak or Expedia, which aggregates information from a number of airline databases?
The travel service, in this case, interacts with the airline’s API.
The API is the interface that, like your helpful waiter, can be asked by that online travel service to get information from the airline’s database to book seats, baggage options, etc. 
The API then takes the airline’s response to your request and delivers it right back to the online travel service, which then shows you the most updated, relevant information.


>>>
The react-dom package exports these methods:

    createPortal()
    flushSync()

These react-dom methods are also exported, but are considered legacy:

    render()
    hydrate()
    findDOMNode()
    unmountComponentAtNode()

*/