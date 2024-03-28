const Planet = (props) => {
    return (
        <div>
            <h1> Planet Name : {props.name}</h1>
            <p> Distance : {props.distance} </p>
            <p> Gravity : {props.gravity} </p>
            <p> Moons : {props.moons} </p>

        </div>
    )
}

export default Planet;




