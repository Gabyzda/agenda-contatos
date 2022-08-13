import React from "react";
import './App.css';
import {Routes , Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>} />
    </Routes>

    </>
  );
}

export default App;
