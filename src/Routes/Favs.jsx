import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/global.context";


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
