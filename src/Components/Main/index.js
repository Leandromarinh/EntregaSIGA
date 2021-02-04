import React from "react";

import "./styles.css";

import Grid from "../Grid/index";

import List from "../List/index";

export default function Main({ name, curso, periodo, nivel, creditos }) {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Visualização de Inscrição em Disciplinas</h2>
      </div>

      <div className="main-bottom">
        <div className="main-container">
          <div className="esq">
            <h3>Visualização de Inscrição em Disciplinas</h3>
            <h4>{name}</h4>
            <h4>{curso}</h4>
          </div>
          <div className="dir">
            <h4 id="per">{periodo}</h4>
            <h4>{nivel}</h4>
          </div>
        </div>
        <div className="cred">
          <h4>{creditos}</h4>
        </div>
      </div>
      <div className="corpo">
        <div className="horario">
          <h3>08:00</h3>
          <h3>10:00</h3>
          <h3>12:00</h3>
          <h3>13:00</h3>
          <h3>15:00</h3>
          <h3>17:00</h3>
        </div>
        <div className="grade">
          <Grid />
          <List
            mat1="Introdução à Engenharia de Controle e Automação"
            hr1="Ter- 08:00 às 10:00"
            mat2="Algoritmos e Progamação"
            hr2="Seg, Qua e Sex - 13:00 às 15:00"
            mat3="Química EE"
            hr3="Ter, Qui - 13:00 às 15:00"
          />
        </div>
      </div>
    </div>
  );
}
