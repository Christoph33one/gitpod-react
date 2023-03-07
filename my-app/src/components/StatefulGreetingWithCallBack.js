// import React from "react";

// class StatefulGreeting extends React.Component{
//     // constructor is a built in function
//     constructor(props) {
//         super(props);
//         this.state = {
//             introduction: "Hello!",
//             buttonText: "on",

//         };
//     }
// // updating the state to give "good bye" message when button is clicked. Use setState!
// // setState will render once the state is updated.
// // same for button on and off once clicked!
//     handleClick() {
//         this.setState({
//             introduction: "Goodbye!",
//         });
//         console.log(this.state.introduction);
//         this.setState({
//             buttonText: "off",
//         });
//         console.log(this.state.buttonOn);
//     }



//     render() {
//         return (
//             <div>
//                 <h1>{this.state.introduction}{this.props.greeting}</h1>
//                 <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
//             </div>
//         )
//     }
// }

// export default StatefulGreeting;