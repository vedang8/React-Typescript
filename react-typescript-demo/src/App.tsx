import { Greet } from './components/Greet'
import {Person} from './components/Person'
import { PersonList } from './components/PersonList'

function App() {
  const personName = {
    first: 'Vedang',
    last: 'Joshi'
  }

  const nameList = [
    {
      first: 'Vedang',
      last: 'Joshi'
    },
    {
      first: 'Jay',
      last: 'Patel'
    },
    {
      first: 'Dhruvin',
      last: 'Kavathiya'
    }
  ]
  return (
      <>
        <Greet name='Vedang' messageCount={20} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList}/>
      </>
  )
}

export default App
