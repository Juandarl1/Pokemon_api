import React from "react"; 
import "./sass/App.scss";
import { Button } from "./components/button";

const App = () => {
  return (
    <>
      <h1>Pokemon API</h1>


        {/* Tarjetas*/}

        <div className="btnContainer">
        <Button text="Anterior" />
        <Button text="Siguiente" />
        </div>




    </>
  );
}

export {App};