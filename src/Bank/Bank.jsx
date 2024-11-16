import React, { useState } from "react";
function MyBank(){
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(1000); // Bank balance
  const [amount, setAmount] = useState("");

  // Mock user credentials
  const validUsername = "user123";
  const validPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  const deposit = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      setBalance(balance + Number(amount));
      setAmount("");
    } else {
      alert("Enter a valid amount to deposit.");
    }
  };

  const withdraw = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      if (balance >= Number(amount)) {
        setBalance(balance - Number(amount));
        setAmount("");
      } else {
        alert("Insufficient balance.");
      }
    } else {
      alert("Enter a valid amount to withdraw.");
    }
  };

  if (!isLoggedIn) {
    // Render Login Form
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Jony Bank Dashboard
        </h1>
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Current Balance</h2>
          <p className="text-3xl font-bold text-green-500">${balance}</p>
        </div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={deposit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Deposit
          </button>
          <button
            onClick={withdraw}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Withdraw
          </button>
        </div>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded w-full hover:bg-gray-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};




export default MyBank;