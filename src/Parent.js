import React from "react";
import "./style.css";
import Child1 from "./Child1"

export default function Parent() {
  const name="rajat"
  return (
    <div>
   <Child1 name={name}/>
    </div>
  );
}
