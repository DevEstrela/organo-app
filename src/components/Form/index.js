import "../Form/Form.css";
import { useState } from "react";
import CampoText from "./../CampoText/index";
import ListSuspense from "../ListSuspense/index";

import Button from "../Button";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador </h2>
        <CampoText
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoText
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoText
          obrigatorio={true}
          label="Image"
          placeholder="Digite o enderço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListSuspense
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          label="Times"
          itens={props.times}
        />
        <Button>
          Criar Card
        </Button>
        
      </form>
    </section>
  );
};

export default Form;
