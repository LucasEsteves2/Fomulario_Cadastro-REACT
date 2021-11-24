import React from 'react';
import { Button, TextField, Switch, FormControlLabel,Typography  } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <>
            <form>

                <Typography align='center' variant="h3" component="h1" >Formulario de Cadastro</Typography>

                <TextField id="nome" label="Nome:" variant="outlined" margin="normal" fullWidth />

                <TextField id="nome" label="Sobrenome:" variant="outlined" margin="normal" fullWidth />

                <TextField id="cpf" label="Cpf:" variant="outlined" margin="normal" fullWidth />

                <FormControlLabel label="Promoções" control={<Switch nome="Promo" defaultChecked color="primary" />} />

                <FormControlLabel label="Novidades" control={<Switch nome="Novidades" defaultChecked color="primary" />} />



                <Button variant="contained" color="primary">
                    CADASTRAR
                </Button>
            </form>
        </>

    );
}

export default FormularioCadastro;