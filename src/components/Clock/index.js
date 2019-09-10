import React, { Component } from "react";
import moment from "moment";
import "./styles.css";
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format("H:mm:ss")
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: moment().format("H:mm:ss")
            });
        }, 30);
    }
    render() {
        return <h1>{this.state.time}</h1>;
    }
}