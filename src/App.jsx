import './App.css'

import About from './sections/about/About'
import Hero from './sections/hero/Hero'

import { largeLogos, smallLogos } from './images'
import { SectionHeading, SponsorLogo, Accordion, Carousel } from './components/Components'

function NavBar() {
    return (
        <nav>
            <div id='logo'>

            </div>
            <div id='links'>
                <ul>
                    <li><a href="#Hero">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Sponsors">Sponsors</a></li>
                    <li><a href="#FAQ">FAQ</a></li>
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
                <div id='large-logos'>{largeLogos.map((logo) => <SponsorLogo key={logo} type={'large'} logo={logo}></SponsorLogo>)}</div>
                <div id='small-logos'>{smallLogos.map((logo) => <SponsorLogo key={logo} type={'small'} logo={logo}></SponsorLogo>)}</div>
            </div>
        </div>
    )
}

function FAQ() {
    return (
        <div id='FAQ' className='flexbox-col-center'>
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
