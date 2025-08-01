import React from 'react';

const GuestPage = () => {
    // Sample flight data
    const flights = [
        { id: 1, flightNumber: 'AI101', destination: 'Delhi', time: '10:00 AM', price: 5000 },
        { id: 2, flightNumber: 'SG202', destination: 'Mumbai', time: '1:00 PM', price: 6000 },
        { id: 3, flightNumber: '6E303', destination: 'Bangalore', time: '4:00 PM', price: 4500 },
    ];

    return (
        <div>
            <h2>Welcome, Guest!</h2>
            <p>Browse available flights below. Please log in to book a ticket.</p>
            <h3>Flight Details</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {flights.map(flight => (
                    <li key={flight.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
                        <p><strong>Flight:</strong> {flight.flightNumber}</p>
                        <p><strong>Destination:</strong> {flight.destination}</p>
                        <p><strong>Time:</strong> {flight.time}</p>
                        <p><strong>Price:</strong> ₹{flight.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuestPage;