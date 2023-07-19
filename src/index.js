import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import List from "./List";

ReactDom.render(
  <div>
    <Header> </Header>
    <List></List>
  </div>,

  document.getElementById("root")
);
