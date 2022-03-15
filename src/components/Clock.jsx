import React from "react";
import "./clock.css";

class Clock extends React.Component {
  timerID = 0;

  constructor(props) {
    super(props);
    this.state = { date: new Date(), day: true };
    console.log("constructor called!");
  }

  render() {
    console.log("render called!");
    return (
      <div className={`clock ${!this.state.day ? "night" : ""}`}>
        <h1>Hello, World!</h1>
        <h2>It's {this.state.date.toLocaleTimeString()} ⏰ </h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount called!");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    console.log("tick called!");
    this.setState({
      date: new Date(),
      day: this.state.date <= 17,
    });
  }

  componentDidUpdate() {
    if (this.state.day) {
      console.log("good morning! 🍃");
    } else {
      console.log("good night! 🌚");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called!");
    clearInterval(this.timerID);
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It's {props.date.toLocaleTimeString()} ⏰ </h2>
//     </div>
//   );
// }

export default Clock;
