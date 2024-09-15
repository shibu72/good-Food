import { useEffect, useState } from "react"

export default function WhyGoodFood() {
    const [icons, setIcons] = useState([])
    useEffect(()=>{
        fetch('/data.json').then(res=>res.json()).then(data=>setIcons(data.whyGf))
    })
  return (
    <div className="mt-40">
        <h1 className="flex text-center w-fit m-auto text-5xl font-bold capitalize">Why simply Good Food</h1>
        <div className="flex felx-wrap items-center justify-between mt-20">
            {
                icons.map((icon, index) =><div key={index} className=" w-[30%] grid gap-5 items-center justify-center justify-items-center text-center m-auto">
                <img src={icon.src} alt={icon.title} />
                <h1>{icon.title}</h1>
                <p>{icon.description}</p>
            </div>)
            }
        
        </div>
    </div>
  )
}
