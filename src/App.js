import React from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container'


class App extends React.Component {
  render() { 
    return ( 
    
    <Container fixed maxWidth="sm">


      <FormularioCadastro/>
    </Container>
    )
  }
}
 
export default App;
