import React, { useEffect, useState } from "react";
import DadosPessoais from "./FormularioCadastro/DadosPessoais";
import DadosUsuario from "./FormularioCadastro/DadosUsuario";
import DadosEntrega from "./FormularioCadastro/DadosEntrega";
import { Step, Stepper, StepLabel, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
 
  useEffect(()=>{
    if(etapaAtual === formularios.length-1)
    {
      aoEnviar({dadosColetados});
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FormularioCadastro;