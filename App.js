import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import {validarCPF, validarSenha} from "./models/cadastro";
import validacoesCadastro from "./context/ValidacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <validacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}
function aoEnviarForm(dados){
  console.log(dados);
}


export default App;