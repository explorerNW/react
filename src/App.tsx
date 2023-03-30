import { lazy } from "react";
import React, { Suspense } from "react";

import logo from "./logo.svg";
import "./App.css";
import { ComponentA } from "./components";

const ComponentB = lazy(() => import("./components/component-b"));
class Temp extends React.Component {
  clickHandler(e: any) {
    console.log(e);
    import("./components/component-b").then((component) => {
      console.log(component);
    });
  }

  render() {
    return (
      <>
        <span onClick={this.clickHandler}>Temp</span>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA />
        <Temp></Temp>
        <Suspense fallback={<div>loading...</div>}>
          <ComponentB></ComponentB>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
