import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'


function App()  {

    return ( 
    <Container fixed maxWidth="sm">
         <Typography align="center" variant="h3" component="h1">
          Formulario de Cadastro
        </Typography>
      <FormularioCadastro aoEnviar={formularioLogin}/>
    </Container>
    )
  } 
  
function formularioLogin(dados)
{
  console.log(dados)
}

export default App;
