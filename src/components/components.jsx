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
    Accordion,
    Carousel
};