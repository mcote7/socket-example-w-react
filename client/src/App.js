import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

function App() {


  const [socket] = useState(() => io(':8004'));

  useEffect(() => {
    socket.on("message-from-server", data => console.log(data));


    return () => socket.disconnect(true);
  }, [])

  const clickHandler = (e) => {
    socket.emit("message-from-client", {"message": "client clicked a button!"});
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>Send socket message to server!</button>
    </div>
  );
}

export default App;
