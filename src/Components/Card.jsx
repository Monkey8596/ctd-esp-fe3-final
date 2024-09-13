import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/global.context";

const Card = ({ dentist }) => {

  const{state, dispatch} = useDentistStates()
  const isFav = state.favs.find((fav) => fav.id == dentist.id)

  const addFav = ()=>{
    dispatch({type: isFav ? 'REMOVE_FAV': 'ADD_FAV', payload: dentist})
  }

  return (
    <div className="card">
        <img src="/doctor.jpg" alt="" width={200}/>
        <Link to={'/detail/' + dentist.id}><h3>{dentist.name}</h3></Link>
        <h3>{dentist.username}</h3>
        <button onClick={addFav} className="favButton">{isFav ? '❤️' : '⭐' }</button>
    </div>
  );
};

export default Card;
