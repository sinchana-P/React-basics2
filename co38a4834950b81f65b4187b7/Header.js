/* in order of program to make any sense of JSX
Always do line no. 4 */

import React from "react"

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

/* this component is completely stuck inside of this File, I'm not sending this out of my file, so do line.no 24
This is done, when this file has only 1 comp to export  */

export default Header

/* Now, import this comp in index14.js

 "./ "    refers to the file within folder , not the dependencies tht installed


*/

/* or */

/* 

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

*/