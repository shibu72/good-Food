import { useEffect, useState } from "react"

export default function OurMenus() {
  const [foods, setFoods] = useState([])
  useEffect(()=>{
    fetch('/data.json').then(res=> res.json()).then(data=>setFoods(data.meals))
  })
  return (
    <div>
      <div className="py-5 shadow-md">
      <div className="flex gap-4 text-base-200 w-[70%] m-auto">
        <button className="btn w-[10%] bg-bg_orange text-base-200">Full menus</button>
        <button className="btn w-[10%]">Enteree</button>
        <button className="btn w-[10%]">Breakfast</button>
        <button className="btn w-[10%]">Snacks</button>
      </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-between w-[70%] m-auto mt-10">
        {
          foods.map((food, index) => <div key={index} className="w-[30%] grid gap-2 items-center font-bold p-2 shadow-lg rounded-xl">
          <img className="w-full" src={food.src} alt="" />
          <span className="text-bg_orange"> &#9733; 4.5/5</span>
          <h2 className="text-2xl">Heathy Food Name</h2>
          <p className="text-lg">$100</p>
          <button className="btn bg-bg_green text-base-200">Add to cart</button>
          <p className="text-red-500 text-sm font-semibold flex items-center m-auto">
            Protein 49g
           <span className="text-black text-lg px-2">/</span> 
          Carbs 23g
          <span className="text-black text-lg px-2">/</span>
          Fat 23g
          </p>
        </div>)
        }
        
      </div>


<div className="text-center mt-10">
<div className="join">
  <button className="join-item btn btn-sm">&larr; Previous</button>
  <button className="join-item btn btn-sm btn-active bg-bg_green text-base-200">1</button>
  <button className="join-item btn btn-sm ">2</button>
  <button className="join-item btn btn-sm">3</button>
  <button className="join-item btn btn-sm">4</button>
  <button className="join-item btn btn-sm">Next &rarr;</button>
</div>
</div>
      
    </div>
  )
}
