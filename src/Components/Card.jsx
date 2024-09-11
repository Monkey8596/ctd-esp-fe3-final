import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/global.context";

const Card = ({ dentist }) => {
  const{setFavs} = useDentistStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((favs) => [...favs, dentist]);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="public/images/doctor.jpg" alt="" width={200}/>
        <Link to={'/detail/' + dentist.id}>
          <h3>{dentist.name}</h3>
        </Link>
        <h3>{dentist.username}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
