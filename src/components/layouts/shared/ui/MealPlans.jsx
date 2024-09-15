export default function MealPlans() {
  return (
    <div className="bg-[#C4C4C4] flex flex-wrap items-center justify-between mt-20">
        <div className="leading-relaxed w-[50%] h-[30vh] bg-white rounded-r-full relative">
            <div className="m-auto w-fit absolute top-[50%] right-[0%] -translate-x-[50%] -translate-y-[50%]">
                <div className="leading-loose">
            <h1 className="text-5xl font-bold">Make daily meals <br /> healthy and moderate</h1>
            <p className="text-bg_green">Ingredients are naturally rich and full to taste</p>

                </div>
            <button className="bg-bg_green rounded-xl text-base-300 font-semibold px-4 py-2">Meals plans &#129109;</button>
            </div>
        </div>
        <img src="/Rectangle 49.png" alt="banner" />
    </div>
  )
}
