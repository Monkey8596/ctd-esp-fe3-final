import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentistStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map( (dentist) => (
          <Card key={dentist.id} dentist={dentist} /> 
                ))}
      </div>
    </main>
  )
}

export default Home