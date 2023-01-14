function addTwoNumbersTogether(a, b) {
    return a + b
}

/* PROPS */
/* import React from "react"
import ReactDOM from "react-dom"  */

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */
    return (
        <h1>Hello {firstName} {lastName}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


/* NOTE */
/*
    <h1>Hello {firstName} {lastName}!</h1>

Interpreter soon after seeing ">" symbol after html tag 
Goes into JSX mode 

& soon after seeing "{" 
Switch back into a JS mode   

so Anything inside { }  --> is considered as JS 

*/

/*      Aside : JS inside JSX

        Using new Date object */

function App() {
    const date = new Date()
    const hours = date.getHours() % 12
   
    return (
        <div>
            <h1>It is currently about { date.getHours() % 12 }!</h1>
            <h1>It is currently about { new Date().getHours() % 12 }!</h1>
            <h1>It is currently about {hours} o'clock!</h1>
        </div>

        
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

   /**
     * Challenge: fix the h1 below to use the timeOfDay
     * string we determined in the code above
     */

function App() {
    const date = new Date()
    const hours = date.getHours()
    let TimeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
   
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))





/* PROPS  part:3 */

import React from "react"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src="./images/mr-whiskerson.png"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/fluffykins.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/felix.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src="./images/pumpkin.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default App