import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css'; // Assuming you have some styles in App.css
const App = () => {
    // State to toggle flag
    const [flag, setFlag] = useState(true);

    return (
        <div>
            <h1>Cricket App</h1>
            {/* Button to toggle flag */}
            <button onClick={() => setFlag(!flag)}>
                Toggle View (Flag: {flag.toString()})
            </button>
            {/* Conditional rendering based on flag */}
            {flag ? <ListofPlayers /> : <IndianPlayers />}
        </div>
    );
};

export default App;