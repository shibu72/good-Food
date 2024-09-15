import HeaderMain from "../components/layouts/shared/ui/HeaderMain";
import MealPlans from "../components/layouts/shared/ui/MealPlans";
import NewTrending from "../components/layouts/shared/ui/NewTrending";
import PFAQ from "../components/layouts/shared/ui/PFAQ";
import WhyGoodFood from "../components/layouts/shared/ui/WhyGoodFood";

export default function Home() {
  return (
    <div className="bg-header-bg bg-no-repeat bg-top bg-contain bg-fixed h-[80vh] w-[100%]">
        <div className="w-[70%] m-auto pt-10">
        <HeaderMain/>
        <WhyGoodFood/>
        </div>
        <NewTrending/>
        <MealPlans/>
        <PFAQ/>
    </div>
  )
}
