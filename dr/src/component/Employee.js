const Employee = (props) => {
    return (
        <div>
            <h1> Hello {props.name}</h1>
            <h2> So you work at {props.company}</h2>
            <h2> And your CTC is {props.package} </h2>
            <h2> and your tech stack is {props.techstack} </h2>
        </div>
    )
}

export default Employee;