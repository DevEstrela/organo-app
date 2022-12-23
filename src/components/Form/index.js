import "../Form/Form.css";
import CampoText from "./../CampoText/index";
import ListSuspense from "../ListSuspense/index";

const Form = () => {
  const times = [
         "Programação",
         "Front-end",
         "Data Science",
         "Devlops"
      ];
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador </h2>
        <CampoText label="Nome" placeholder="Digite seu nome" />
        <CampoText label="Cargo" placeholder="Digite seu cargo" />
        <CampoText label="Image" placeholder="Digite o enderço da imagem" />

        <ListSuspense label="Times" itens={times} />
      </form>
    </section>
  );
};

export default Form;
