import React, {Component, component} from 'react'

class welcome extends Component {
    render() {

        return(
            <div>
                <h1>Hello, {this.props.name} superhero {this.props.heroname}</h1>
                <h1> {this.props.children}</h1>
            </div>
        ) 
    }
}

export default welcome;