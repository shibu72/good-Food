import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/ui/Footer";
import Header from "../shared/Header";

export default function Main() {
  return (
    <div>
      
      <Header/>
      <Navbar/>
      <div className="h-screen">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
