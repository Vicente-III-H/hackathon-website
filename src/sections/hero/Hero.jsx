import './hero.css'
import { heroImages } from "../../images";

function Hero() {
    return (
        <div id='Hero' className='flexbox'>
            <div className='flex'>
                <div>
                    <h1 className='title'>fishyHacks</h1>
                    <p>Dive into a new world!</p>
                    <p>{'February 31, ' + ((new Date).getFullYear() + 4)}</p>
                    <button>Apply Now</button>
                </div>
            </div>
            <div className='flex'>
                <img src={heroImages.submersible} height={500} width={500}></img>
            </div>
        </div>
    )
}

export default Hero;