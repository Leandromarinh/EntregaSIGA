import "./App.css";

import Header from "./Components/Header/index";

import Main from "./Components/Main/index";

function App() {
  return (
    <div>
      <Header
        portal="Portal UFRJ"
        nome="Rosana Borges"
        aluna="Aluna"
        docs="Documentos"
        insc="Inscrição em Disciplinas"
        grades="Grades"
        dados="Dados Pessoais"
        pesq="Pesquisa Avaliativa"
        req="Requerimentos"
        ajuda="Ajuda"
      />
      <Main
        name="Rosana Borges"
        curso="Curso: Engenharia de Controle e Automação"
        periodo="1 período"
        nivel="Nível: Graduação"
        creditos="Créditos:11"
      />
    </div>
  );
}

export default App;
