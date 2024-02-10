import React from "react";
import { Route as ReactRouter,Routes } from "react-router-dom";
import { RoutConfig } from "./RoutConfig";

function Route() {
  return (
    <Routes>
      {RoutConfig.map((item) => (
        <ReactRouter key={item.id} path={item.name} element={item.page}/>
      ))}
    </Routes>
  );
}

export default Route;
