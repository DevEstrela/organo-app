import "./CampoText.css";

const CampoText = (props) => {
  return (
    <div className="campo-text">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default CampoText;
