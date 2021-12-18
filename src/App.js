import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    );
  }
}

export default App;
