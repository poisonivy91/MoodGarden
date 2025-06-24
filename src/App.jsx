import { useState } from 'react'
import EntryForm from './components/EntryForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>MoodGarden 🌿</h1>
        <p>Welcome to your peaceful journaling space</p>
        <EntryForm />
      </div>
    </>
  )
}

export default App
