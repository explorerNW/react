import React from "react";

import styles from "./component-a.module.css";
import { Button } from "reactstrap";

export class ComponentA extends React.Component {
  componentDidMount(): void {}

  render() {
    return (
      <>
        <span className={styles.error}>component A</span>
        <Button color="danger">Danger!</Button>
      </>
    );
  }
}
