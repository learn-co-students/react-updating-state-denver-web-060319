import React from 'react';

class ClickityClick extends React.Component {
    state = { hasBeenClicked: false }
    
    onButtonClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }
    
    render() {
        console.log(this.state.hasBeenClicked)
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.onButtonClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick;
