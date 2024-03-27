import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import Adminroutes from "./routes/Adminroutes";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRoutes />}/>
        <Route exact path="/admin/*" element={<Adminroutes />}/>
      </Routes>
    </>
  );
}

export default App;
