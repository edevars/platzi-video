import React, {Component} from 'react';
import Search from '../components/search.js';


class SearchContainer extends Component{

    state = {
        value: 'Luis Fonsi'
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.input.value,'submit')
    }

    setRefInput = element =>{
        this.input = element
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ','-')
        })
    }

    render(){
        return(
            <div>
                <Search
                    setRef={this.setRefInput}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleInputChange}
                    value={this.state.value}
                />
            </div>
        )
    }
}

export default SearchContainer