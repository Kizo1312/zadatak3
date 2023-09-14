import "./App.css";
import { Component } from "react";
// import ClassComp from "./ClassComp";
// import FuncComp1 from "./FuncComp1";
// import FuncComp2 from "./FuncComp2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Ivan", years: 30 },
        { name: "Marko", years: 35 },
        { name: "Ana", years: 25 },
      ],
      nekiText: "Increase years for ",
    };
  }

  uvecaj = (index) => {
    this.setState((prevState) => {
      const newUsers = [...prevState.users];
      newUsers[index].years += 1;
      return { users: newUsers };
    });
  };

  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <div key={index}>
            <p>
              {user.name} has {user.years} years.
            </p>
            <button onClick={() => this.uvecaj(index)}>
              {this.state.nekiText}
              {user.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
