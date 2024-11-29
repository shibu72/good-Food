import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/ui/Footer";
import Header from "../shared/Header";

export default function Main() {
  return (
    <div>
      
      <Header/>
      
      <div className="h-screen">
        <Navbar/>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
