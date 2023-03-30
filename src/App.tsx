import { lazy } from "react";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";

const ComponCentC = lazy(() => import("./components/componant-c"));
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
        <Temp></Temp>
        <Link to={"/a"}>
          <Button>Component-a</Button>
        </Link>
        <Suspense fallback={<div>loading...</div>}>
          <ComponCentC></ComponCentC>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
