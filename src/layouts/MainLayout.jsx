import { Outlet } from "react-router-dom"
import Navbar from "../partials/Navbar"



const MainLayout = () => {
  return (
    <>
      <div className="full-container">
        <Navbar/>
        <div className="content" style={{marginTop:"12vh"}}>
        <Outlet/>

        </div>
   
      </div>
 
    </>
  )
}

export default MainLayout