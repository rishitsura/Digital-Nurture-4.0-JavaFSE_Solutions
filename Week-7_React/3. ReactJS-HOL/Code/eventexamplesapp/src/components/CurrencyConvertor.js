import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
    };

    // Bind event handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle input change
  handleInputChange(event) {
    this.setState({
      rupees: event.target.value,
    });
  }

  // Handle form submission and conversion
  handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    const conversionRate = 0.011; // Approximate INR to EUR rate (1 INR = 0.011 EUR)
    const euros = parseFloat(this.state.rupees) * conversionRate;

    if (this.state.rupees && !isNaN(euros)) {
      alert(`${this.state.rupees} INR = ${euros.toFixed(2)} EUR`);
    } else {
      alert("Please enter a valid amount!");
    }
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ margin: "10px 0" }}>
            <label>Amount: </label>
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleInputChange}
              style={{ margin: "0 10px", padding: "5px" }}
              placeholder="Enter amount"
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <label>Currency: </label>
            <select style={{ margin: "0 10px", padding: "5px" }}>
              <option value="euro">Euro</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              padding: "5px 15px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              margin: "10px 0",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
