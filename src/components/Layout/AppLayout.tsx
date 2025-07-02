import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
   <>
   <Navbar/>

   <main>
       <Outlet/>
   </main>
   
   </>
  )
}

export default AppLayout