import { aboutImages } from "../../images";
import { SectionHeading, StatCard } from "../../components/Components";

function About() {
    return (
        <div id='About' className='flexbox-col-center'>
            <SectionHeading title={'About'} description={'Join a bunch of people doing a bunch of things this Hackathon event! There is a bunch of awesome stuff to do and cool prizes to win! Join one of the most unknown and niche Hackathons ever! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}></SectionHeading>
            <div>
                {aboutImages.map((image) => <img key={image} src={image} width={360} height={240}></img>)}
            </div>
            <div>
                <StatCard number={1} stat={"Hackers"}></StatCard>
            </div>
        </div>
    )
}

export default About;