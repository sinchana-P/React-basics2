/* 1.
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
/*  2.
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

/*import Nav from "./components/Nav" */

function Nav () {
    return (
        <div className="nav-bar">
            <img src="./images/airbnb-logo.png" className="logo"/>      
        </div>
    )
}

function Hero () {
    return (
        <div className="hero-section">
            <img src="./images/photo-grid.png" className="grid"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

function Card () {
    return (
        <div className="card-container">
            <div className="card">
                <img src="./images/jk.jpg" className="card-img"/>
                <h3><i className="fa-solid fa-star-sharp"></i> 5.0 (6) ·USA </h3>
                <h5 className="card-title">Life lessons with Katie Zaferes</h5>
                <h5 className="card-cost">From $136 / person</h5>
            </div>

        </div>
    )
}
function App () {
    return (
        <div>
            <Nav />
            <Hero />
            <Card />
        </div>
    
    )
}


ReactDOM.render(<App />, document.getElementById("root"))