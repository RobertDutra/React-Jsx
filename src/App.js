import React from 'react';
import './App.css';
import Cabecalho from './Cabecalho';
import Evento from './componentes/Eventos';
import Formulario from './componentes/Formulario';

// function BemVindo({nome, sobrenome}){ 
//   return <h2>Bem vindo {nome} {sobrenome}</h2>;
// } 
  
const BemVindo = ({nome, sobrenome}) => {
  return <h2>Bem vindo {nome} {sobrenome}</h2>;
}

// class BemVindo extends React.Component{
//     render(){

//       const {nome, sobrenome} = this.props;
//       return <h2>Bem vindo {nome} {sobrenome}</h2>;
//     }
// }

function cliclando(){
   return (
    alert("Hello"));
}


function App() {
  return (
    <div>
        <BemVindo nome={"Robert"} sobrenome={"Dutra"}/>
        <p>Olá</p>
        <input type={'button' }value={"Clique aqui"} onClick={cliclando}></input>
        <Cabecalho title ={"Turma BR101"}/>
        <Evento/>;
        <Formulario/>
    </div>
  );
}

export default App;
