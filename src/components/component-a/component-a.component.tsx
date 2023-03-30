// @flow
import React from "react";

import { Button } from "reactstrap";
import { Link, Outlet } from "react-router-dom";

import styles from "./component-a.module.scss";
export class ComponentA extends React.Component {
  componentDidMount(): void {}

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.error}>component A</span>
        <Button color="danger">Danger!</Button>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={""}>
          <Button>Back</Button>
        </Link>
        <Link to={"b"}>component-b</Link>
        <Outlet />
      </div>
    );
  }
}
