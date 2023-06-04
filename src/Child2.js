import React from "react";
import "./style.css";
import Child3 from "./Child3"

export default function Child2({name}) {
  return (
    <div>
  <Child3 name={name}/>
    </div>
  );
}
