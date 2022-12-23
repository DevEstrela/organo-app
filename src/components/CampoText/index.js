import "./CampoText.css";

const CampoText = (props) => {
  return (
    <div className="campo-text">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
};

export default CampoText;
