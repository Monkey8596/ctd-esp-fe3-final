import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme,setTheme] = useState()
  const [dentists,setDentists] = useState([])
  const [favs,setFavs] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
      axios(url).then((res)=>{
        setDentists(res.data)
      })   
  },[])

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider value={{theme,setTheme,dentists,favs,setFavs}}>
      {children}
    </ContextGlobal.Provider>

  );
};

export const useDentistStates = () => useContext(ContextGlobal);