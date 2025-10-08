function QuestionAccordion({ question, answer }) {
    return (
        <div>
            <div>{question}</div>
            <div>{answer}</div>
        </div>
    )
}

function FAQ() {
    return (
        <div>
            <div>
                <div>
                    <h1>FAQ</h1>
                </div>
                <div>
                    <QuestionAccordion></QuestionAccordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ