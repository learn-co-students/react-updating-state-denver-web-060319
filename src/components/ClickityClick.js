import React from 'react';

class LightSwitch extends React.Component {
    // Initial state is defined
    state = {
        toggled: false
    };

    // when handleClick is called, setState will update the state so that toggle is reversed
    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggled ? this.props.message : "OFF"}</button>
            </div>
        );
    }
}

export default LightSwitch;