import "../Form/Form.css";
import CampoText from "./../CampoText/index";
import ListSuspense from "../ListSuspense/index";

import Button from "../Button";

const Form = () => {
  const times = [
         "Programação",
         "Front-end",
         "Data Science",
         "Devlops"
      ];

  const aoSalvar = (event) => {
      event.preventDefault()
      console.log('VALIDADO')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador </h2>
        <CampoText obrigatorio= {true} label="Nome" placeholder="Digite seu nome" />
        <CampoText obrigatorio= {true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoText obrigatorio= {true} label="Image" placeholder="Digite o enderço da imagem" />

        <ListSuspense label="Times" itens={times} />
        <Button>
          Criar Card
        </Button>

      </form>
    </section>
  );
};

export default Form;
