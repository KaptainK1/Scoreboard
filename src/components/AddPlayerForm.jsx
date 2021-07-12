import React from 'react';

class AddPlayerForm extends React.Component{

    state={
        value:''
    };

    handleValueChanged = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value: ''});
    }

    render(){
        console.log(this.state.value);
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChanged}
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