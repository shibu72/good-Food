import HeaderMain from "../components/layouts/shared/ui/HeaderMain";
import MealPlans from "../components/layouts/shared/ui/MealPlans";
import NewTrending from "../components/layouts/shared/ui/NewTrending";
import PFAQ from "../components/layouts/shared/ui/PFAQ";
import WhyGoodFood from "../components/layouts/shared/ui/WhyGoodFood";

export default function Home() {
  return (
    <div>
        <div className="w-[70%] m-auto mt-10">
        <HeaderMain/>
        <WhyGoodFood/>
        </div>
        <NewTrending/>
        <MealPlans/>
        <PFAQ/>
    </div>
  )
}
