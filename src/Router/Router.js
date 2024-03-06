import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home/Home";


const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        
      </Routes>
    </div>
  );
};

export default Router;
