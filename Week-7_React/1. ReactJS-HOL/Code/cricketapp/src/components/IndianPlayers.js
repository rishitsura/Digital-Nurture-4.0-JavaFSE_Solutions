import React from 'react';

const IndianPlayers = () => {
    // T20 players array
    const T20players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Suryakumar Yadav', 'Hardik Pandya'];

    // Ranji Trophy players array
    const RanjiTrophy = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Hanuma Vihari', 'Shubman Gill', 'Mayank Agarwal'];

    // Merge arrays using ES6 spread operator
    const allPlayers = [...T20players, ...RanjiTrophy];

    // Destructuring to separate odd and even indexed players
    const [oddPlayer1, , oddPlayer2, , oddPlayer3, , oddPlayer4, , oddPlayer5] = allPlayers;
    const [, evenPlayer1, , evenPlayer2, , evenPlayer3, , evenPlayer4, , evenPlayer5] = allPlayers;

    return (
        <div>
            <h2>Merged Players (T20 and Ranji Trophy)</h2>
            <ul>
                {allPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Odd Team Players</h2>
            <ul>
                <li>{oddPlayer1}</li>
                <li>{oddPlayer2}</li>
                <li>{oddPlayer3}</li>
                <li>{oddPlayer4}</li>
                <li>{oddPlayer5}</li>
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                <li>{evenPlayer1}</li>
                <li>{evenPlayer2}</li>
                <li>{evenPlayer3}</li>
                <li>{evenPlayer4}</li>
                <li>{evenPlayer5}</li>
            </ul>
        </div>
    );
};

export default IndianPlayers;