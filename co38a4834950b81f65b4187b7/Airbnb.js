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

function Card (props) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={`./images/${props.img}`} className="card-img"/>
                <i className="fa-solid fa-star-sharp"></i> 
                <div>
                    <span>{props.rating} </span>
                    <span>({props.reviewCount}) • </span>  
                    <span>{props.country}</span>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-cost">{props.cost}</h5>
            </div>

        </div>
    )
}
function App () {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="card-container">
            <Card 
                img="jk1.jpg"
                rating="5.0"
                reviewCount="7"
                country="SEOUL"
                title="Life lessons with Katie Zaferes"
                cost="From $136 / person"
            />
            <Card 
                img="jk2.jpg"
                rating="5.0 "
                reviewCount="14"
                country="SEOUL"
                title="Learn wedding photography"
                cost="From $125 / person"
            />
            <Card 
                img="jk3.png"
                rating="5.0"
                reviewCount="21"
                country="SEOUL"
                title="Group Mountain Biking"
                cost="From $50 / person"
            />
            <Card 
                img="jk4.jpg"
                rating="5.0 "
                reviewCount="28"
                country="SEOUL"
                title="Group Mountain Biking"
                cost="From $150 / person"
            />
            <Card 
                img="jk5.jpg"
                rating="5.0 "
                reviewCount="35"
                country="SEOUL"
                title="Group Mountain Biking"
                cost="From $370 / person"
            />
            <Card 
                img="jk6.jpg"
                rating="5.0 "
                reviewCount="42"
                country="SEOUL"
                title="Group Mountain Biking"
                cost="From $720 / person"
            />
            </div>
        </div>
    
    )
}


ReactDOM.render(<App />, document.getElementById("root"))