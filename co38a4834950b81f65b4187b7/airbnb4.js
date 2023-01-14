/*
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
*/

    /*          PASS OBJECT AS PROPS              
    
            Challenge: Fix our component! 😱
    */
    

    function Navbar() {
        return (
            <nav>
                <img src="../images/airbnb-logo.png" className="nav--logo" />
            </nav>
        )
    }
    
    function Card (props) {
        console.log(props)
        console.log(props.item)
        let badgeText
        if (props.item.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.item.location === "Online") {
            badgeText = "ONLINE"
        }
    
        /*          
        1st badgeText= "" will be assigned some value , from if , else loop.    
        
                        OR
        
            props.openSpots === 0 && <div className="card--badge">{badgeText}</div>}
            {props.location === "Online" && <div className="card--badge">{badgeText}</div>}
        
        */        
    
        return (
            <div className="card-container">
                <div className="card">
    
                    {badgeText && <div className="card--badge">{badgeText}</div>}
    
                    <img src={`./images/${props.item.coverImg}`} className="card-img"/>
                    <i className="fa-solid fa-star-sharp"></i> 
                    <div>
                        <span>{props.item.stats.rating} </span>
                        <span>({props.item.stats.reviewCount}) • </span>  
                        <span>{props.item.location}</span>
                    </div>
                    <h5 className="card-title">{props.item.title}</h5>
                    <h5 className="card-cost">{props.item.price}</h5>
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
                    item={item}
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