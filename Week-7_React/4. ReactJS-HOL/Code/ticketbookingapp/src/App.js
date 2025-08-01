import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import './App.css'; // Assuming you have some styles in App.css
const App = () => {
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Element variable for conditional rendering
    let content;
    if (isLoggedIn) {
        content = <UserPage />;
    } else {
        content = <GuestPage />;
    }

    return (
        <div>
            <h1>Ticket Booking App</h1>
            {/* Login/Logout button */}
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                style={{ padding: '10px 20px', backgroundColor: isLoggedIn ? '#dc3545' : '#007bff', color: 'white', border: 'none', borderRadius: '5px', margin: '10px' }}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            {/* Render content based on login status */}
            {content}
        </div>
    );
};

export default App;