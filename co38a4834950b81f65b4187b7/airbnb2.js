/*
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
*/
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function Navbar() {
    return (
        <nav>
            <img src="../images/airbnb-logo.png" className="nav--logo" />
        </nav>
    )
}

function Card (props) {
    return (
        <div className="card-container">
            <div className="card">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={`./images/${props.img}`} className="card-img"/>
                <i className="fa-solid fa-star-sharp"></i> 
                <div>
                    <span>{props.rating} </span>
                    <span>({props.reviewCount}) • </span>  
                    <span>{props.location}</span>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-cost">{props.price}</h5>
            </div>

        </div>
    )
}

function App() {
            // <Hero />
    const data = [
        {
            id: 1,
            title: "Life Lessons with Katie Zaferes",
            description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
            price: 136,
            coverImg: "../images/jk.jpg",
            stats: {
                rating: 5.0,
                reviewCount: 6
            },
            location: "Online",
            openSpots: 0,
        },
        {
            id: 2,
            title: "Learn Wedding Photography",
            description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
            price: 125,
            coverImg: "../images/jk1.jpg",
            stats: {
                rating: 5.0,
                reviewCount: 30
            },
            location: "Online",
            openSpots: 27,
        },
        {
            id: 3,
            title: "Group Mountain Biking",
            description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
            price: 50,
            coverImg: "../images/jk2.jpg",
            stats: {
                rating: 4.8,
                reviewCount: 2
            },
            location: "Norway",
            openSpots: 3,
        }
    ]

    const cards = data.map(item => {
        /* observe "key" property */
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
        )
}
ReactDOM.render(<App />, document.getElementById("root"))

/* NOTE:

.map() method, fills all the elements of the source array , to the new array.

*/