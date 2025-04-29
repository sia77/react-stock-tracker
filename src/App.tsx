import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import MainNavigation from './components/main-navigation'
import SearchBar from './components/SearchBar'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <>
      <ToastContainer position="top-center" />
      <div className='flex flex-col min-h-screen'>

        <header>
          <MainNavigation/>
          <SearchBar />
        </header>
    
        <main className="flex-1 mx-4">

          <div className="max-w-[1220px] mx-auto py-3">      
            <AppRoutes />
          </div>
          
        </main>
        
        <Footer />
      </div>
    </>

  )
}

export default App
