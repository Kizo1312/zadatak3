import "./App.css";
// import { Component } from "react";
import { useState } from "react";
// import ClassComp from "./ClassComp";
// import FuncComp1 from "./FuncComp1";
// import FuncComp2 from "./FuncComp2";

function App() {
  const [users, setUsers] = useState([
    { name: "Ivan", years: 30 },
    { name: "Marko", years: 35 },
    { name: "Ana", years: 25 },
  ]);

  const [nekiText] = useState("Increase years for ");

  const uvecaj = (index) => {
    const newUsers = [...users];
    newUsers[index].years += 1;
    setUsers(newUsers);
  };
  const changeName = (event, index) => {
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>
            {user.name} has {user.years} years.
          </p>
          <input type="text" onChange={(event) => changeName(event, index)} />
          <button onClick={() => uvecaj(index)}>
            {nekiText}
            {user.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
