import "./App.css";
import { Component } from "react";
import ClassComp from "./ClassComp";
import FuncComp1 from "./FuncComp1";
import FuncComp2 from "./FuncComp2";

const users = [
  { name: "Ivan", years: 30 },
  { name: "Marko", years: 35 },
  { name: "Ana", years: 25 },
];

class App extends Component {
  render() {
    return (
      <>
        <FuncComp1 ime={users[0].name} godine={users[0].years}></FuncComp1>
        <ClassComp ime={users[1].name} godine={users[1].years}></ClassComp>
        <FuncComp2 />
      </>
    );
  }
}
export default App;
