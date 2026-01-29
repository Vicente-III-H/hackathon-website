import './App.css'
import about1 from './assets/about/about-1.jpg'
import about2 from './assets/about/about-2.jpg'
import about3 from './assets/about/about-3.jpg'

function NavBar() {
    return (
        <nav>
            <div id='logo'>

            </div>
            <div id='links'>
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

function Hero() {
    return (
        <div id='Hero' className='flexbox'>
            <div className='flex'>
                <h1>fishyHacks</h1>
                <p>Dive into a new world!</p>
                <button>Apply Now</button>
            </div>
            <div className='flex'>

            </div>
        </div>
    )
}

function StatCard({ number, stat }) {
    return (
        <div className='flexbox-col-center'>
            <p>{number}</p>
            <p>{stat}</p>
        </div>
    )
}

function About() {
    return (
        <div id='About' className='flexbox-col-center'>
            <div>
                <h1>About</h1>
            <p>Join a bunch of people doing a bunch of things this Hackathon event! There is a bunch of awesome stuff to do and cool prizes to win! Join one of the most unknown and niche Hackathons ever! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <img src={about1} width={360} height={240}></img>
                <img src={about2} width={360} height={240}></img>
                <img src={about3} width={360} height={240}></img>
            </div>
            <div>
                <StatCard number={1} stat={"Hackers"}></StatCard>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <Hero></Hero>
            <About></About>
        </>
    )
}

export default App
