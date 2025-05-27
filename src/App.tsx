import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import MainNavigation from './components/main-navigation'
import SearchBar from './components/SearchBar'
import AppRoutes from './routes/AppRoutes'
import { useEffect } from 'react'
import { initGA, logPageView } from './utils/google/analytics'
import { useLocation } from 'react-router-dom'


function App() {

  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className='flex flex-col min-h-screen'>

        <header>
          <MainNavigation/>
          <SearchBar />
        </header>
    
        <main className="flex-1 mx-4 ">

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
