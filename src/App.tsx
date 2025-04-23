// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainNavigation from './components/main-navigation'
import AppRoutes from './routes/AppRoutes'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <header>
        <MainNavigation/>
        {/* <app-search-bar /> */}
      </header>
  
      <main className="flex-1 mx-3">

        <div className="max-w-[1220px] mx-auto py-3">      
          <AppRoutes />
        </div>
        
      </main>
      
      {/* <app-footer></app-footer> */}
    </>
  )
}

export default App
