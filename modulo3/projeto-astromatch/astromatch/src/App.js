import React, { useState } from "react";
import Home from "./components/Home";
import Matches from "./components/Matches"



export default function App() {

  const [page, setPage] = useState("home")

  const mudarPagina = () => {
    switch (page) {
      case "home":
        return <Home irParaMatches = {Matches} />
      case "matches":
        return<Matches irParaHome = {Home} />
      default:
        return<Home/>
    }
  }
  const irParaMatches = () => {
    setPage("matches")
  }

  const irParaHome = () => {
    setPage("home")
  }
  
  return(
    <div>
        {mudarPagina()}
    </div>
  );
};
