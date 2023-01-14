function Contact(props) {
    console.log(props)
    return (
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.phoneNum}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
    )
}

/*  better to use the above method  * /

/*
function Contact({img, name, phoneNum, email}) {
    return (
            <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{phoneNum}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{email}</p>
                </div>
            </div>
    )
}

*/


function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/jk1.jpg"
                name="Mr.JungKook"
                phoneNum="(212) 555-1234"
                email="jk1.meow"
            />
            <Contact 
                 img="./images/jk2.jpg"
                 name="Double bunny"
                 phoneNum="(212) 555-1234"
                 email="jk2.meow"
            />
            <Contact 
                 img="./images/jk3.png"
                 name="Kookie"
                 phoneNum="(212) 555-1234"
                 email="jk3.meow"
            />
            <Contact 
                 img="./images/jk4.jpg"
                 name="Jeon JungKook"
                 phoneNum="(212) 555-1234"
                 email="jk4.meow"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

/*

<div className="contacts">
        
            <div className="contact-card">
                <img src="./images/jk1.jpg"/>
                <h3>Mr. Jungkook</h3>
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
                <img src="./images/jk2.jpg"/>
                <h3>Double bunny</h3>
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
                <img src="./images/jk3.png"/>
                <h3>Kookie</h3>
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
                <img src="./images/jk4.jpg"/>
                <h3>Jeon Jungkook</h3>
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

        */



    /*Concept:  OBJECT-DESTRUCTURING PROPS  */
/*

 const person = {
     img: "./images/mr-whiskerson.png",
     name: "Mr. Whiskerson",
     phone: "(800) 555-1234",
     email: "mr.whiskaz@catnap.meow"
 }

 const {img, name} = person
 console.log(name)

 */

            /* o/p : Mr. Whiskerson  */


/*  NOTE  

return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
        </div>
        )

note here that ,
we are jumping from JSX to JS and back & forth (vice versa)

1st JS
-> JSX using tags
-> JS  using {}  & back-ticks inside ``, we enter into template string 
-> again use {} to insert JS Values  -> It's called Interpolation.
-> back to JSX
*/
