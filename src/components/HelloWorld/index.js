import React from "react";
import "./styles.css";

function HelloWorl(props) {
    return <h1>Hello {props.name}!</h1>
}

HelloWorl.defaultProps = {
    name: "World"
}

export default HelloWorl;