import './App.css'

function NavBar() {
    return (
        <nav>
            <div id='logo'>

            </div>
            <div id='nav-bar'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sponsors</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
        </nav>
    )
}

function App() {
    return (
        <>
            <div id='foreground'>
                <NavBar></NavBar>
            </div>
            <div id='content'>

            </div>
            <div id='background'>

            </div>
        </>
    )
}

export default App
