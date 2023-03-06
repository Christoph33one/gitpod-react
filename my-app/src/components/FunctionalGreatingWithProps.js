import React from "react";


const FunctionalGreatingWithProps = (props) => {
console.log(props);
return <h1>Hello, {props.greeting} My name is {props.name}, my age is {props.age}</h1>;
}

export default FunctionalGreatingWithProps
