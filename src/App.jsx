import './App.css'

import About from './sections/about/About'
import Hero from './sections/hero/Hero'

import { largeLogos, smallLogos } from './images'
import { SectionHeading, Accordion, Carousel } from './components/Components'

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

function Sponsors() {
    return (
        <div id='Sponsors' className='flexbox-col-center'>
            <SectionHeading title={'Sponsors'} description={'Become a sponsors! This is also a placeholder paragraph (well more like text...)'}></SectionHeading>
            <div id='sponsor-list'>
                <div id='large-logos'>{largeLogos.map((logo) => <img key={logo} src={logo} width={500} height={100}></img>)}</div>
                <div id='small-logos'>{smallLogos.map((logo) => <img key={logo} src={logo} width={50} height={50}></img>)}</div>
            </div>
        </div>
    )
}

function FAQ() {
    return (
        <div className='flexbox-col-center'>
            <SectionHeading title={'FAQ'} description={'Frequently asked questions!'}></SectionHeading>
            <div>
                <Accordion title={'Is this a question?'} description={'Yes.'}></Accordion>
            </div>
        </div>
    )
}

function Credits() {
    return (
        <div className='flexbox-col-center'>
            <Carousel></Carousel>
        </div>
    )
}

function App() {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Sponsors></Sponsors>
            <FAQ></FAQ>
            <Credits></Credits>
        </>
    )
}

export default App
