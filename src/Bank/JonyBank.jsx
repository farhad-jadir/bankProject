import React, { useState } from "react";

function Jonybank (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Mock user credentials
  const validUsername = "user123";
  const validPassword = "password123";

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  // Deposit function
  const deposit = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      const newBalance = balance + Number(amount);
      setBalance(newBalance);
      addTransaction("Deposit", Number(amount));
      setAmount("");
    } else {
      alert("Enter a valid amount to deposit.");
    }
  };

  // Withdraw function
  const withdraw = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      if (balance >= Number(amount)) {
        const newBalance = balance - Number(amount);
        setBalance(newBalance);
        addTransaction("Withdraw", Number(amount));
        setAmount("");
      } else {
        alert("Insufficient balance.");
      }
    } else {
      alert("Enter a valid amount to withdraw.");
    }
  };

  // Add transaction
  const addTransaction = (type, amount) => {
    const date = new Date().toLocaleString();
    setTransactions([...transactions, { type, amount, date }]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Jony Bank App Login
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 mb-4">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Bank Dashboard
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

      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-xl font-bold text-center mb-4">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-center">No transactions yet.</p>
        ) : (
          <ul className="space-y-2">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border rounded"
              >
                <span>{transaction.date}</span>
                <span
                  className={
                    transaction.type === "Deposit"
                      ? "text-green-500 font-bold"
                      : "text-red-500 font-bold"
                  }
                >
                  {transaction.type}: ${transaction.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Jonybank;
