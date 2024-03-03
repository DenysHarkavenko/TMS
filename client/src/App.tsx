import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectsList from './components/ProjectsComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/loh' element={<ProjectsList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
