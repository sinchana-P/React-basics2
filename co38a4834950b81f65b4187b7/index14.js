/* Organize components

Move one of it's component into a separate file
I'm gonna move HEADER into it's own separate file 

>>> by convention, I personally like to stick to is
File-name shd be same as of it's component nam, that too in Pascal case letters

*/
import Header from "./Header"
import List from "./List"
import Footer from "./Footer"
/*or */

/*

 "./ "    refers to the file within folder , not the dependencies tht installed
    import Whatever from "./Header" 
*/

function App() {
    return (
        <div>
            <Header />
            <List />
            <Footer />
        </div>
    )
}

/* rendering Header is same as previous */

ReactDOM.render(<App />, document.getElementById("root"))

/* v can also move App comp into it's own file */