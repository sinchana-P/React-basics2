function Header() {
    return (
        <header className="header">
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

function Meme() {
    return (
        <main>
            <form>
                <input type="text" />
                <input type="text" />
                <button>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
