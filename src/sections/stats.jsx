function StatItem({ number, name }) {
    return (
        <div>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    )
}

function Stats() {
    return (
        <div>
            <StatItem number={3} name={"Mentors"}></StatItem>
            <StatItem number={4} name={"Hackers"}></StatItem>
            <StatItem number={5} name={"Projects"}></StatItem>
        </div>
    )
}

export default Stats