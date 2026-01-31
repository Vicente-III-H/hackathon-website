import { heroImages } from "../../images";

function Hero() {
    return (
        <div id='Hero' className='flexbox'>
            <div className='flex'>
                <h1>fishyHacks</h1>
                <p>Dive into a new world!</p>
                <button>Apply Now</button>
            </div>
            <div className='flex'>
                <img src={heroImages[0]} height={360} width={360}></img>
            </div>
        </div>
    )
}

export default Hero;