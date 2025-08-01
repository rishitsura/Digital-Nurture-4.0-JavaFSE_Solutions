import React, { Component } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    // Bind event handlers to ensure 'this' refers to the component instance
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleMultipleEvents = this.handleMultipleEvents.bind(this);
    this.handleSayWelcome = this.handleSayWelcome.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  // Method to increment counter
  handleIncrement() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  // Method to display hello message
  sayHello() {
    alert("Hello! Welcome to the Event Examples App!");
  }

  // Method to handle multiple events for Increment button
  handleMultipleEvents() {
    this.handleIncrement();
    this.sayHello();
  }

  // Method for Say Welcome button
  handleSayWelcome(text) {
    alert(`${text}! Glad you're here!`);
  }

  // Method for OnPress (synthetic event)
  handleOnPress(event) {
    // Log synthetic event to demonstrate its properties
    console.log("Synthetic Event:", event);
    alert("I was clicked!");
  }

  render() {
    return (
      <div>
        <h1>Event Examples App</h1>

        {/* Counter Section */}
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleMultipleEvents} style={buttonStyle}>
          Increment
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter - 1 }))
          }
          style={buttonStyle}
        >
          Decrement
        </button>

        {/* Say Welcome Section */}
        <h2>Say Welcome</h2>
        <button
          onClick={() => this.handleSayWelcome("Welcome")}
          style={buttonStyle}
        >
          Say Welcome
        </button>

        {/* OnPress Synthetic Event Section */}
        <h2>OnPress Event</h2>
        <button onClick={this.handleOnPress} style={buttonStyle}>
          Click on me
        </button>

        {/* Currency Convertor Component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

// Inline button style
const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
