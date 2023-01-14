reactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById("root"))  //reactDOM : global variable. This have a render method, to render or place something on the screen
                                                                             // it takes 2 parameters

  //   see if you can figure out how to render an <ul> with 2+ <li>s inside*/
reactDOM.render(
    <ul>
        <li>apple</li>
        <li>mango</li>
    </ul>,
     document.getElementById("root"))  
