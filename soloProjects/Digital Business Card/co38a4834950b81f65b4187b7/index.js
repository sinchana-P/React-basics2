function Info(){
    return (
        <div className="info-body">
            <img src="./images/profile3.jpg" className="profile" />
            <div className="info-container">
                <h1>Sinchana</h1>
                <h3>FrontEnd Developer</h3>
                <h5>LauraSmith.Website</h5>
            </div>
            <div className="btn-container">
                 <button className="email btn" >Email</button>
                 <button className="linkedin btn">Linkedin</button>
            </div>    
        </div>
   )
}

function About() {
    return (
        <div>
            <h2  className="about">About</h2>
            <p className="about-info">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}


function Interests() {
    return (
        <div>
            <h2  className="interests">Interests</h2>
            <p className="interests-info">Food expert. Music scholar. Reader. Internet fanatic. Travel geek. K-drama holic. Explorer.</p>
        </div>
    )
}

function Footer() {
    return (
    <div className="footer-container">
        <div className="icon"><img src="./images/twitter.png"/></div>
        <div className="icon"><img src="./images/fb.png"/></div>
        <div className="icon"><img src="./images/insta.png"/></div>
        <div className="icon"><img src="./images/github.png"/></div>
        <div className="icon"><img src="./images/linkedin.png"/></div>
    </div>
    )
} 

function Card(){
    return(
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>

    )
}

function App() {
    return (
        <div className="container">
            <Card />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))