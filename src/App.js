import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container'


function App()  {

    return ( 
    <Container fixed maxWidth="sm">
      <FormularioCadastro aoEnviar={formularioLogin}/>
    </Container>
    )
  }
  
function formularioLogin(dados)
{
  console.log(dados)
}

export default App;
