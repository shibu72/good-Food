import { BsCart2 } from "react-icons/bs";
export default function HeaderMain() {
  return (
    <div className="flex items-center justify-between">
        <div className="grid gap-8">
            <h1 className="text-8xl font-semibold">Keep track of </h1>
            <p className="capitalize text-8xl font-semibold text-bg_green">Fitness goal</p>
            <p className="text-3xl">Order on Simply Good Food</p>
            <button className="capitalize w-fit text-md font-semibold px-5 py-4 bg-bg_orange text-base-100 rounded-xl">explore menu &#129109;</button>
        </div>

        <div className="relative">
                <img className="p-16 border-[60px] w-[100%] rounded-full border-bg_green shadow-inner shadow-black" src="/Mask group.png" alt="" />

                <div className="bg-green-700 w-fit p-3 rounded-full text-2xl text-base-200 absolute bottom-0 right-0">
                <BsCart2 />
                </div>
        </div>
    </div>
  )
}
