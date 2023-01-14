/*
        SPREAD OBJECT AS PROPS :

        Spread syntax (...)
Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. 
In a way, spread syntax is the opposite of rest syntax. 
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
*/

/*  {}...item}   ---->  looks like :

<Card
key={item.id}
id={item.id}
title={item.title}
description={item.description}

/>

/* NOTE:

Better to use as in airbnb4.js 
i.e. : item={item} 
 
*/

function Navbar() {
    return (
        <nav>
            <img src="../images/airbnb-logo.png" className="nav--logo" />
        </nav>
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
                
                let badgeText
                if (props.openSpots === 0) {
                    badgeText = "SOLD OUT"
                } else if (props.location === "Online") {
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
            
                            {
                                badgeText &&
                                <div className="card--badge">{badgeText}</div>
                            }
            
                            <img 
                                src={`./images/${props.coverImg}`} className="card-img"
                            />
                            <i className="fa-solid fa-star-sharp"></i> 
                            <div className="card--stats">
                                <span>{props.stats.rating} </span>
                                <span>({props.stats.reviewCount}) • </span>  
                                <span>{props.location}</span>
                            </div>
                            <h5 className="card-title">{props.title}</h5>
                            <h5 className="card-cost">${props.price}</h5>
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
                            {...item}    /* Spread object as props */ 
                        />
                    )
                })        
                
                return (
                    <div>
                        <Navbar />
                        <Hero />
                        <section className="cards-list">
                            {cards}
                        </section>
                    </div>
                    )
            }
            ReactDOM.render(<App />, document.getElementById("root"))