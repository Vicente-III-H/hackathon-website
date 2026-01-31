function SectionHeading({ title, description }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
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