import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Project from './views/Project/Project'

function App() {

  return (
    <main className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </main>
  )
}

export default App
