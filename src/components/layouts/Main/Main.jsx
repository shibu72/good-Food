import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/ui/Footer";
import Header from "../shared/Header";

export default function Main() {
  return (
    <div className="bg-header-bg bg-no-repeat bg-top bg-contain bg-fixed h-screen w-[100%]">
      <div className="bg-base-200">
      <Header/>
      <Navbar/>
      </div>
      <div className="min-h-screen">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
