import React, {Component} from 'react'
import ErrorLayout from '../components/ErrorLayout.js'

class HandleError extends Component {
    state = {
        handleError: false,
    }
    componentDidCatch(error, info) {
        //Envia un error a un servicio como Sentry
        this.setState(
            {handleError: true}
        )
    }

    render() {
        if (this.state.handleError) {
            return (
            <ErrorLayout/>
         )
        }
        return this.props.children
        
    }
}

export default HandleError