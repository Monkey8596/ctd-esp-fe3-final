import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const{state} = useDentistStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist)=>(
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
