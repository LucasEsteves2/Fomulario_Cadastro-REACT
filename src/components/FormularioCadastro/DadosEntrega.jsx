import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import api from "../../service/ViaCep";

function DadosEntrega(props) {
  const [enderecoo, setEnderecoo] = useState({
    cep: "",
    endereco: "",
    numero: "",
    estado: "",
  });

  async function fetchData() {
    const {data} = await api.get(`${enderecoo.cep}/json/`);
    setEnderecoo({ endereco: data.logradouro, estado: data.localidade });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetchData();
        props.aoEnviar({enderecoo});
      }}
    >
      <TextField
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
        value={enderecoo.cep}
        onBlur={(event) => {
          fetchData();
        }}
        onChange={(event) => {
          setEnderecoo({ cep: event.target.value });
          fetchData();
        }}
      />

      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        disabled
        value={enderecoo.endereco}
      />
      <TextField
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        required
        disabled
      />
      <br/>
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
        disabled
        value={enderecoo.estado}
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        FINALIZAR CADASTRO
      </Button>
    </form>
  );
}

export default DadosEntrega;
