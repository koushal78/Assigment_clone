import Compare_Accuracy from "./RightSideBarComponent.jsx/Compare_Accuracy"
import DashboardCharts from "./RightSideBarComponent.jsx/DashboardCharts"
import Responce from "./RightSideBarComponent.jsx/Responce"

const RightSideBar = () => {
  return (
    <>
    <div> <Compare_Accuracy/> </div>
    <div className="">
        <Responce/>
    </div>
    <DashboardCharts/>
    </>
  )
}

export default RightSideBar