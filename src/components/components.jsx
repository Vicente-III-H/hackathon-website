import './components.css'

function SectionHeading({ title, description }) {
    return (
        <div className='section-heading'>
            <h1 className="heading">{title}</h1>
            <p className="body-text">{description}</p>
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

function SponsorLogo({ type, logo }) {
    let logoSize;
    switch (type) {
        case 'large':
            logoSize = {
                width: 500,
                height: 100
            };
            break;
        case 'small':
            logoSize = {
                width: 50,
                height: 50
            };
            break;
        default:
            return null;
    }

    return (
        <a href='#Sponsors'>
            <img src={logo} width={logoSize.width} height={logoSize.height}></img>
        </a>
    )
}

function Accordion({ title, description }) {
    return (
        <div>
            <button>{title}</button>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

function Carousel() {
    return (
        <div>

        </div>
    )
}

export {
    SectionHeading,
    StatCard,
    SponsorLogo,
    Accordion,
    Carousel
};