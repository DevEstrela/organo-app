import './ListSuspense.css'
const ListSuspense = (props) => {
  return (
    <div className="list-suspense">
      <label>{props.label}</label>
        <select required={props.obrigatorio} >
            {props.itens.map( (item) => <option key={item}>{item}</option> ) }
        </select>
    </div>
  );
};

export default ListSuspense;