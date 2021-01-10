import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: "Ron", message: "I don't care", likes: 20},
    {name: "Leslie", message: "I can't believe this is actually working", likes: 43},
    {name: "April", message: "I hate everyone", likes: 73},
    {name: "Andy", message: "I have no clue what is going on", likes: 105}
  ]);

  return (
    <div className="app">
      {
        users.map(user => (<Tweet name={user.name} message={user.message} likes={user.likes} />))
      }
    </div>
  );
}

export default App;
