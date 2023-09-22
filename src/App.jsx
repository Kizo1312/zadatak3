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

  const [newName, setNewName] = useState("");
  const [newYears, setNewYears] = useState("");

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

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newName && newYears) {
      setUsers([...users, { name: newName, years: newYears }]);
      setNewName("");
      setNewYears("");
    }
  };

  // const handleRemoveUser = (event) => {};

  return (
    <div>
      <FuncComp1
        users={users}
        changeName={changeName}
        uvecaj={uvecaj}
        nekiText={nekiText}
      />

      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Years"
          value={newYears}
          onChange={(event) => setNewYears(event.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
