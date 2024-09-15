import { useEffect, useState } from "react";

export default function MealPlans() {
  const [foods, setFoods]=useState([])
useEffect(()=>{
  fetch('/data.json').then(res=> res.json()).then(data=> setFoods(data.meals))
})
  return (
    <div className="w-[70%] m-auto">
      <h1 className="text-5xl p-5">Select your meal plans</h1>

      <div className="flex flex-wrap items-center justify-between">
        <div className="grid gap-2 items-center justify-center w-fit p-5 shadow-lg font-semibold">
          <div className="flex gap-2 items-center justify-between">
          <button className="btn bg-bg_orange text-base-200 px-10 rounded-full">Small Meal</button>
          <span className="px-4 py-2 rounded-full flex gap-2 items-center justify-center bg-[#ECECEC] text-base-200">
            <i>-</i>
            <i>1</i>
            <i>+</i>
            </span>
          </div>
          <button className="btn rounded-full ">Small Paleo Meal</button>
          <button className="btn rounded-full " >Medium Meal</button>
          <button className="btn rounded-full ">Medium Paleo Meal</button>
          <button className="btn rounded-full ">Large Meal</button>
          <button className="btn rounded-full ">Large Paleo Meal</button>
        </div>

        <div className="w-[40%] font-semibold shadow-lg">
          <div className="grid gap-2 shadow-lg p-5">
            <div className="flex items-center justify-between py-3 px-5 bg-[#F4F4F4] text-red-600 rounded-xl">
              <span>Subtotal :</span>
              <span>$150.00</span>
            </div>
            <button className="uppercase bg-bg_green text-base-200 text-sm font-bold p-3 rounded-xl">confirm meals</button>
          </div>

          {/* end code */}

          <h2 className="text-3xl  p-5">meal details</h2>

          <div className="grid gap-4 p-5 items-center justify-center">
            {
              foods.map((food, index) =><div key={index} className="flex gap-4 items-center justify-start p-2 shadow-md rounded-lg">
              <img src={food.src}  alt="" className="w-[20%] rounded-xl object-fit"/>
              <div>
                <h4 className="text-lg flex gap-5 items-center justify-between"><span>Healthy Food Name</span><span className="text-sm text-bg_orange">&#9733; 4.5/5</span></h4>
                <p className="text-red-400 text-sm font-semibold flex items-center m-auto">
              Protein 49g
             <span className="text-black text-lg px-2">/</span> 
            Carbs 23g
            <span className="text-black text-lg px-2">/</span>
            Fat 23g
            </p>
              </div>
            </div> )
            }
          
          </div>


        </div>
      </div>
    </div>
  );
}
