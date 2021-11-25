import React,{useState} from 'react';
import { Button, TextField, Switch, FormControlLabel,Typography  } from '@material-ui/core';


function FormularioCadastro() {

    const [usuario,setUsuario] = useState("")
    const [cpf,setCpf]=useState();
    const [sobrenome,setSobrenome]=useState();


    return (
        <>
            <form onSubmit={(event) => {
                
                event.preventDefault()
                console.log(usuario)
                console.log(sobrenome)
                console.log(cpf)

              }}>

                <Typography align='center' variant="h3" component="h1" >Formulario de Cadastro</Typography>

                <TextField id="usuario" label="Nome:" variant="outlined" margin="normal" fullWidth  value={usuario}
                 onChange={(event) => {
                    setUsuario(event.target.value);
                
                    if(usuario.length >= 3)
                    {
                        setUsuario(usuario.substr(0,3));
                        }

                }} />

                <TextField id="nome" label="Sobrenome:" variant="outlined" margin="normal" fullWidth 
                onChange={ (event) => {
                    setSobrenome(event.target.value)
                }}
                
                />

                <TextField id="cpf" label="Cpf:" variant="outlined" margin="normal" fullWidth 
                onChange={(event)=>
                {
                    setCpf( event.target.value)
                }}
                
                />

                <FormControlLabel label="Promoções" control={<Switch nome="Promo" defaultChecked color="primary" />} />

                <FormControlLabel label="Novidades" control={<Switch nome="Novidades" defaultChecked color="primary" />} />



        
                <Button variant="contained" color="primary" type="submit" >
                    CADASTRAR
                </Button>

                
            </form>
        </>

    );
}

export default FormularioCadastro;