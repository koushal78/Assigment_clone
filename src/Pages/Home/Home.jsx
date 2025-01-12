import Navbar from "../../Component/Navbar"
import SideBar from "../../Component/SideBar"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-[5%]">
        <SideBar/>
      </div>
    </div>
  )
}

export default Home