import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectsList from './components/ProjectsComponent'
import { ChakraProvider } from '@chakra-ui/react'
import RegistrationPage from './pages/Regestration'

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/loh' element={<ProjectsList />} />
            <Route path='/reg' element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
