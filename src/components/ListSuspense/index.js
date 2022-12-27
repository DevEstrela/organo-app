import './ListSuspense.css'
const ListSuspense = (props) => {
  return (
    <div className="list-suspense">

      <label>{props.label}</label>

        <select onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} valor={props.valor} >
          <option value=""></option>
            {props.itens.map( item => <option key={item}> {item} </option> ) }
        </select>

    </div>
  );

};

export default ListSuspense;