import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+ 

const fName = 'JOY';
const lName = 'Kitet';
const number = 10;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello, {fName + " " + lName}</h1>
    <h2>These are the Days of the week!</h2>
    <p>Your lucky number is {number}</p>
    <ul>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
    </ul>
  </div>
);
