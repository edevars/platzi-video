import React, {PureComponent} from 'react';
import './media.css';
import PropTypes from 'prop-types'

class Media extends PureComponent {

    // constructor(props){     super(props)     this.state = {         author:
    // props.author     } }

   

    render() {

        return (
            <div className="card">
                <div className="card-image" onClick={this.props.handleClick}>
                    <img src={this.props.cover}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{this.props.title}</span>
                    <p>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;
