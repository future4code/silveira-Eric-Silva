import React, { useState } from "react";
import Home from "./components/Home";
import Matches from "./components/Matches"
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
margin: 0 auto;
padding: 0 auto;
box-sizing: border-box;
`


export default function App() {

  const [page, setPage] = useState("home")

  const mudarPagina = () => {
    switch (page) {
      case "home":
        return <Home irParaMatches = {irParaMatches}/>
      case "matches":
        return<Matches irParaHome = {irParaHome}/>
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
        <GlobalStyle/>
        {mudarPagina()}
    </div>
  );
};
