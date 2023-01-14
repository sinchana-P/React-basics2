/* JSX : is similar to plain HTML in js. It is JS-XML*/

const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">  o/p

const element = <h1 className="header">This is JSX</h1>
console.log(element)

/* o/p
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX 
ReactDOM.render(element, document.getElementById("root"))

/* IMP!!!
To render multiple tags , wrap them in a single parent */

ReactDOM.render(
<div>
    <h1>hi</h1>
    <p>This is a paragraph</p>
</div>,
document.getElementById("root")
)

/* or */

const page =(
<div>
    <h1>hi</h1>
    <p>This is a paragraph</p>
</div>)

ReactDOM.render(page, document.getElementById("root"))


/*  note >>>
What is meant by JSX?
JSX stands for JavaScript XML. 
JSX allows us to write HTML in React. ***
JSX makes it easier to write and add HTML in React.
JSX stands for JavaScript syntax extension.

>>>
What is difference between JS and JSX?
JS is simply a scripting language, adding functionality into your website. 
JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. 
Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.

*/