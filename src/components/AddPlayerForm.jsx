import React from 'react';

class AddPlayerForm extends React.Component{

    state={
        value:''
    };

    playerInput = React.createRef();

    //use commented out lines to handle updates for user input
    // handleValueChanged = (e) => {
    //     this.setState({value: e.target.value});
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.addPlayer(this.state.value);
        this.props.addPlayer(this.playerInput.current.value)
        // this.setState({value: ''});
        e.currentTarget.reset();
    }

    render(){
        console.log(this.state.value);
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    // value={this.state.value}
                    // onChange={this.handleValueChanged}
                    placeholder="Enter a player's name"
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;