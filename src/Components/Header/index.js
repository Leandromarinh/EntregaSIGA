import React from "react";

import "./styles.css";

import usuario2 from "../imagens/usuario2.png";

import logo from "../imagens/logo.png";

import icone from "../imagens/icone.png";

export default function Header({
  portal,
  nome,
  aluna,
  docs,
  insc,
  grades,
  dados,
  pesq,
  req,
  ajuda,
}) {
  return (
    <div className="header">
      <div className="header-principal">
        <img className="header-logo" src={logo} alt="logo" />
        <h1>{portal}</h1>
        <div className="header-usuario">
          <div className="user">
            <h3>{nome}</h3>
            <div className="icon">
              <img className="header-icone" src={icone} alt="icone" />
              <h5>{aluna}</h5>
            </div>
          </div>
          <div className="foto">
            <img className="header-usuario" src={usuario2} alt="usuario2" />
          </div>
        </div>
      </div>
      <div className="header-abaixo">
        <h3>{docs}</h3>
        <h3>{insc}</h3>
        <h3>{grades}</h3>
        <h3>{dados}</h3>
        <h3>{pesq}</h3>
        <h3>{req}</h3>
        <h3>{ajuda}</h3>
      </div>
    </div>
  );
}
