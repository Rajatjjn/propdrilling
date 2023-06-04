import React from "react";
import "./style.css";
import Child2 from "./Child2"

export default function Child1({name}) {
  console.log(name)
  return (
    <div>
    <Child2 name={name}/>
    </div>
  );
}
