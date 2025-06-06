import Header from './Components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
          <Header />
        <main className='min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col items-center justify-start '>

        </main>
      </Router>
    </>
  )
}

export default App
