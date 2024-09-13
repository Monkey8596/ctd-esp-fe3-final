import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
 
  const [detail,setDetail] = useState({})

  const {id} = useParams()
  
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  
  useEffect(()=>{
      axios(url).then((res)=>{
        setDetail(res.data)
      })
  },[])

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div>
        <p>Name: {detail.name} </p>
        <p>Email: {detail.email} </p>
        <p>Phone: {detail.phone} </p>
        <p>Website: {detail.website} </p>
      </div>
    </>
  )
}

export default Detail