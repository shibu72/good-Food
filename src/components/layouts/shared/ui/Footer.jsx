import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-evenly mt-20 font-semibold">
        <img className="w-[5%]" src="/logo.png" alt="" />
        <div>
          <ul className="list-none">
            <li>
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              <Link to={"/our-menus"}>Our menus</Link>
            </li>
            <li>
              <Link to={"/meal-plans"}>Meal plans</Link>
            </li>
            <li>
              <Link to={"/catering"}>Catering</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none">
            <li>
              <Link to={"/how-it-work"}>How it work</Link>
            </li>
            <li>
              <Link to={"/testimonials"}>Testimonials</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5">Subscribe To Our Email Alerts</h3>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-bg_green text-base-200">Subscribe</button>
          </div>
          <div className="flex gap-5 items-center justify-start pt-5">
            <a href=""><img src="/fb.png" alt="" /></a>
            <a href=""><img src="/insta.png" alt="" /></a>
            <a href=""><img src="/link.png" alt="" /></a>
            <a href=""><img src="/ex.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-2 mt-10 bg-[#1E1E1E] text-white">
        <p className="m-auto">
          &copy; All rights reserved by Simple Good Foods
        </p>
      </div>
    </div>
  );
}
