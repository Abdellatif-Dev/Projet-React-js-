import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Liste_Joueurs from "./Liste_Joueurs";
import DetailsJoueur from "./DetailsJoueur";
import AppApiControle2 from "./AppApiControle2";
export default function NavBar({joueurs}) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/equipes">
                Equipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/joueurs">
                Joueurs
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Matchs</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container bg-dark text-white">
        <Routes>
          {/* <Route path="/" element={<App />}></Route> */}
          <Route
            path="/joueurs"
            element={<Liste_Joueurs joueurss={joueurs} />}
          ></Route>
          <Route
            path="/joueurs/:id"
            element={<DetailsJoueur joueurss={joueurs} />}
          ></Route>
          <Route path="/equipes/joueurs/*" element={'<Not found'}></Route>
        </Routes>

        {/* <Routes>
        <Route path="/" element={<AppApiControle2/>} />
        <Route path="/equipes" element={'liste equipe'} />
        <Route path="/joueurs" element={<Liste_Joueurs data={props.data}/>} />
        <Route path="/joueurs/:id" element={<DetailsJoueur/>} />
        <Route path="/equipes/joueurs/x/y" element={'Not found'} />
      </Routes> */}
      </div>
    </div>
  );
}
