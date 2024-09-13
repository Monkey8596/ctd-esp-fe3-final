import { Link } from "react-router-dom"
import { useDentistStates } from "./utils/global.context";


const Navbar = () => {

  const { state, dispatch } = useDentistStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme === "dark" ? "dark" : ""}>
      <img src="/DH.ico" alt="logo" />
      <div className="links">
        <Link to={'/'}><h4>Home</h4></Link>
        <Link to={'/contact'}><h4>Contact</h4></Link>
        <Link to={'/favs'}><h4>Favs</h4></Link>
      </div>
      <button onClick={toggleTheme}>
        {state.theme === "dark" ? "Light ☀️" : "Dark 🌜"}
      </button>
    </nav>
  )
}

export default Navbar