import "./App.css";
import { useState } from "react";
import FuncComp1 from "./FuncComp1";
// import { Component } from "react";
// import ClassComp from "./ClassComp";

// import FuncComp2 from "./FuncComp2";

function App() {
  const [users, setUsers] = useState([
    { name: "Ivan", years: 30 },
    { name: "Marko", years: 35 },
    { name: "Ana", years: 25 },
    { name: "Toma", years: 27 },
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
      <FuncComp1
        users={users}
        changeName={changeName}
        uvecaj={uvecaj}
        nekiText={nekiText}
      />
    </div>
  );
}

export default App;
