import Card from '../Components/Card'
import { useDentistStates } from '../Components/utils/global.context';


const Home = () => {
  const {state} = useDentistStates()

  return (
    <main className="home-container" >
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