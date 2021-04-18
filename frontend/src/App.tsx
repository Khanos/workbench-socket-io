import React from "react";
import io from "socket.io-client";
import "./App.css";

const uri = "http://localhost:3003";
const socket = io(uri!);

function App() {
  const handleNewRoom = () => {
    console.log("testing button");
    socket.emit("new-room", "hello form frontend");
  };
  return (
    <div className="App">
      <button onClick={handleNewRoom}>Add a new room</button>
    </div>
  );
}

export default App;
