import React from "react";
import "./style.css";


export default function Child3({name}) {
  console.log(name)
  return (
    <div>
     <p>my name is {name}</p>
    </div>
  );
}
