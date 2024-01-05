import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import useNews from './Hooks/useNews'
import NewsCards from './Components/NewsCards'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Outlet} from 'react-router-dom'



 function App() {

 


  const router = createBrowserRouter([


    {
      path:'/',
      element:<NewsCards category={'politics'}/>
    }
    ,

    
    {
      path:'/entertainment',
      element:<NewsCards/>
    }

  ])


  return (
    <>
      <Header/>
      <div  className="main" >
    

<Outlet/>

</div>
    
     <Footer/>
    </> 
  )
}

export default App
