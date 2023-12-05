import { useState } from 'react'
import StudentCard from './components/studentcard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-purple-600 h-screen flex justify-center p-10'>
        <StudentCard/>
      </div>
    </>
  )
}

export default App
