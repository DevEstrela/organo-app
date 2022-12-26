import "./CampoText.css";

const CampoText = (props) => {



  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  };

  return (

    <div className="campo-text">

      <label>{props.label}</label>

      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoText;
