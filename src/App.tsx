
import { useEffect, useRef, useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { Sub } from './types'
import './App.css'
// import { getAllSubs } from './services/getAllSubs'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'peluco',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Peluco hace de moderador a veces'
  },
  {
    nick: 'saulo_fernandez',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=dapelu'
  }
]

function App() {
  const [newSubsNumber, setNewSubsNumber] = useState<AppState ["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)
  
  const [subs, setSubs] = useState<AppState["subs"]>([])
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  // Cuando viene info diferente (diferentes nombres en este caso) de una api
  // Ver en "types.d.ts"
  // useEffect(() => {
  //   getAllSubs().then(setSubs)
  // }, [])


  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n +1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Twitch subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
