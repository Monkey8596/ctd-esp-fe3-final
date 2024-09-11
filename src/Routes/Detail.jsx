import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail,setDetail] = useState({})
  const {id} = useParams()
  
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  

  useEffect(()=>{
    axios(url).then((res)=>{
      setDetail(res.data)   
    })},[])

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <div> {detail.name} </div>
        <div> {detail.email} </div>
        <div> {detail.phone} </div>
        <div> {detail.website} </div>
        info
      </div>
    </>
  )
}

export default Detail