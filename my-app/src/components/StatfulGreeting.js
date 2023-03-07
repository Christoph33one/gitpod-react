import React from "react";

class StatefulGreeting extends React.Component{
    // constructor is a built in function
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "on",

        };
    }
// updating the state to give "good bye" message when button is clicked. Use setState!
// setState will render once the state is updated.
// same for button on and off once clicked!
handleClick() {
    this.setState({
      introduction: "Goodbye!",
      buttonText: 'Enter'
    }, ()=>{
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
    });
    console.log(this.state.introduction);
    console.log(this.state.buttonText);
  }


    render() {
        return (
            <div>
                <h1>{this.state.introduction}{this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;