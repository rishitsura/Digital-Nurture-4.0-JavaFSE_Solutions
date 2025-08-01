import React from "react";
import "./App.css";
const App = () => {
  const office = {
    name: "Sunshine Office Park",
    rent: 55000,
    address: "123 MG Road, Bangalore",
  };

  // office objects list
  const officeList = [
    {
      id: 1,
      name: "Skyline Towers",
      rent: 75000,
      address: "456 Koramangala, Bangalore",
    },
    {
      id: 2,
      name: "Green Valley Plaza",
      rent: 58000,
      address: "789 Whitefield, Bangalore",
    },
    {
      id: 3,
      name: "Metro Workspaces",
      rent: 65000,
      address: "101 Indiranagar, Bangalore",
    },
    {
      id: 4,
      name: "Urban Hub",
      rent: 52000,
      address: "202 Jayanagar, Bangalore",
    },
    {
      id: 5,
      name: "Tech Park",
      rent: 80000,
      address: "303 Electronic City, Bangalore",
    },
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>

      <img
        src="data:image/jpeg;base64,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"
        alt="Office Space"
        style={{ width: "600px", margin: "20px 0" }}
      />

      <h2>Featured Office</h2>
      <div>
        <p>
          <strong>Name:</strong> {office.name}
        </p>
        <p
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          <strong>Rent:</strong> ₹{office.rent}
        </p>
        <p>
          <strong>Address:</strong> {office.address}
        </p>
      </div>

      <h2>All Office Spaces</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {officeList.map((office) => (
          <li
            key={office.id}
            style={{
              margin: "10px 0",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <p>
              <strong>Name:</strong> {office.name}
            </p>
            <p
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              <strong>Rent:</strong> ₹{office.rent}
            </p>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
