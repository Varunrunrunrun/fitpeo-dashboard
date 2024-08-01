
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {


  return (
    <main className='w-full min-h-screen'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  )
}

export default App
