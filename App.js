
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/background.jpg')" }}>
      <header className="bg-black bg-opacity-60 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyZapCart Steel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#buyer" className="hover:underline">Buyer Login</a></li>
            <li><a href="#supplier" className="hover:underline">Supplier Access</a></li>
            <li><a href="#track" className="hover:underline">Track Order</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center h-[80vh] bg-black bg-opacity-50">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Connect Steel Makers, Distributors & Buyers</h2>
        <p className="text-lg md:text-xl mb-8">POs, Dispatch, Transport & Tally Export — All in One Platform</p>
        <div className="space-x-4">
          <a href="#buyer" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">Get Started</a>
          <a href="#supplier" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">I'm a Supplier</a>
        </div>
      </main>

      <footer className="bg-black bg-opacity-70 p-4 text-center text-sm">
        © 2025 Surya Janapati | Powered by MyZapCart | Jai Hanuma 🕉️
      </footer>
    </div>
  );
}

export default App;
