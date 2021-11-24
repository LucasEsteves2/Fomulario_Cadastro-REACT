import React from 'react';
import {Button,TextField,Switch,FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return (
<>
    <form>

    <h1 >formulario de cadastro</h1>

    <TextField id="nome" label="Nome:" variant="outlined"  margin="normal" fullWidth />

    <TextField id="nome" label="Sobrenome:" variant="outlined"  margin="normal" fullWidth />

    <TextField id="cpf" label="Cpf:" variant="outlined"  margin="normal" fullWidth />



    <FormControlLabel label="Novidades"  control={<Switch nome="Novidades" defaultChecked color="primary" />} />


 

    
        <Button variant="contained" color="primary">
      Hello World   
    </Button>
    </form>
 </>
    
    );
}

export default FormularioCadastro;