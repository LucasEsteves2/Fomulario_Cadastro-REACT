import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import {Typography,Stepper, StepLabel,Step} from '@material-ui/core'

import "./style.css";

function FormularioCadastro({ aoEnviar }) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState([]);

  useEffect(() => {   
    if(etapa===formularios.length-1)
    aoEnviar(dados)
  });

  //array para guardar os forumarlios
  const formularios = [
    <DadosUsuario aoEnviar={dadosColetados} />,
    <DadosPessoais aoEnviar={dadosColetados} />,
    <DadosEntrega aoEnviar={dadosColetados} />,
    <Typography align="center" variant="h3" component="h1"> Obrigado Pelo Cadastro!!  </Typography>
  ];

  function dadosColetados(dadosformulario) {
    setDados({...dados, ...dadosformulario });
    proximaPagina();
  }

  function proximaPagina() {
    setEtapa(etapa + 1);
  }

  return <>
  
  <Stepper activeStep={etapa} alternativeLabel>
  <Step><StepLabel>Login</StepLabel></Step>
  <Step><StepLabel>Pessoal</StepLabel></Step>
  <Step><StepLabel>Entrega</StepLabel></Step>
  <Step><StepLabel>Finalização</StepLabel></Step>

  </Stepper>
  {formularios[etapa]}
  
  </>;
}

export default FormularioCadastro;
