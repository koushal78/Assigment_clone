import Navbar from "../../Component/Navbar"
import LeftSideBar from "../../Component/LeftSideBar"
import RightSideBar from "../../Component/RightSideBar"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-[5%] md:flex ">

        <LeftSideBar/>
        <div className=" p-8">
        <RightSideBar/>

        </div>
      </div>
    </div>
  )
}

export default Home