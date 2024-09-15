import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="shadow">
        <nav className="navbar items-center align-middle justify-between justify-items-center w-[70%] m-auto">
    <img src="/logo.png" alt="" />
    <div>
        <ul className="list-none flex flex-row items-center capitalize text-base-500 text-lg font-semibold">
            <li className="px-4 border-r text-bg_green"><Link to={'/'}>Home</Link></li>
            <li className="px-4 border-r"><Link to={'/our-menus'}>Our menus</Link> </li>
            <li className="px-4 border-r"><Link to={"/meal-plans"}>Meal plans</Link></li>
            <li className="px-4 border-r"><Link to={"/catering"}>Catering</Link></li>
            <li className="px-4 border-r"><Link to={"/how-it-work"}>How it work</Link></li>
            <li className="px-4 border-r"><Link to={"/testimonials"}>Testimonials</Link></li>
            
            <li className="uppercase px-4"> <Link to={"/faq"}>faq</Link></li>
        </ul>
    </div>
    <div className="flex flex-wrap gap-8 text-xl items-center justify-center">
        <button className="border border-bg_green text-bg_green py-2 px-4 rounded-xl ">Log in</button>
        <button className="bg-bg_green text-base-200 py-2 px-4 rounded-xl ">Sign up</button>
    </div>
        </nav>
    </div>
  )
}
