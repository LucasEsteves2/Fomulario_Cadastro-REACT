import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography } from '@material-ui/core';


function FormularioCadastro(props) {

    const [usuario, setUsuario] = useState("")
    const [cpf, setCpf] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [promocao, setPromcocao] = useState(true);
    const [novidades, setNovidades] = useState(false);


    return (
        <>
            <form onSubmit={event => {
                event.preventDefault()
                props.aa({usuario,cpf,sobrenome,promocao,novidades})
            }}>
                <Typography align='center' variant="h3" component="h1" >Formulario de Cadastro</Typography>

                <TextField id="usuario" label="Nome:" variant="outlined" margin="normal" fullWidth value={usuario}
                    onChange={(event) => {
                        setUsuario(event.target.value);
                    }} />


                <TextField id="nome" label="Sobrenome:" variant="outlined" margin="normal" fullWidth value={sobrenome}
                    onChange={(event) => {
                        setSobrenome(event.target.value)
                    }}
                />

                <TextField id="cpf" label="Cpf:" variant="outlined" margin="normal" fullWidth value={cpf}
                    onChange={(event) => {
                        let temp2 = event.target.value;
                        if (temp2.length >= 14) {
                            temp2=    temp2.substr(0,14);
                            }
                        setCpf(temp2)
                    }}

                />

                <FormControlLabel label="Promoções" control={<Switch nome="Promo" checked={promocao} color="primary" />} 
                onChange={(event) => {
                    setPromcocao(event.target.checked)
                }}
                
                />

                <FormControlLabel label="Novidades" control={<Switch nome="Novidades" checked={novidades}color="primary" />}
                onChange={event=>{
                    setNovidades( event.target.checked  )
                }}
                
                />

                <Button variant="contained" color="primary" type="submit" >
                    CADASTRAR
                </Button>
            </form>
        </>

    );
}

export default FormularioCadastro;