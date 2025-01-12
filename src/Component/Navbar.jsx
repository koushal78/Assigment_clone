
import img from '../assets/img.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { GoGraph } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import { useState } from 'react';
import { FaBell } from "react-icons/fa";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
 const[nav, setnav] = useState(false)

 const handleNav =()=>{
   setnav(!nav)
 }
 
  return (
    <>
   
    <div className=  {` bg-[#303946] h-14  p-2 w-screen flex justify-between relative lg:px-[8%]  overflow-hidden `} >
        <div className='flex '>
        <img className='h-8 w-10' src={img} alt="" />
        <h1 className="text-white text-2xl font-medium  "> Firstbench</h1>
        </div>
       
      <div className="">
      <div className="text-white text-4xl font-bold md:hidden ">
        <    IoReorderThreeOutline className='
        ' onClick={handleNav} />

        </div>
        <ul className='hidden  md:flex justify-between md:mt-2 lg:gap-8  '>
          
          <li className='text-white flex mx-1 text-sm lg:text-md '><FaHome className='mt-1 mr-2' /> Deshboard</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><WiStars className='mt-1 mr-2' /> FristGuru</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><FaBuilding className='mt-1 mr-2' /> TownHall</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><AiFillThunderbolt className='mt-1 mr-2' /> Al Evaluation</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><GoGraph className='mt-1 mr-2' />Performance</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><TiDocumentText className='mt-1 mr-2' />Mock Test</li>
          <li className='text-white flex mx-1 text-sm lg:text-md'><FaBell className='mt-1 mr-2' /> <div className='relative'>
          <i class="bi bi-p-square-fill text-green-600 absolute top-1 left-2" ></i>
          <select name="prfile" className='bg-black outline-none text-white pl-6 pr-1 py-1 rounded-md' id="">
            <option  value="Profile">Profile</option>
            <option value="Profile-2">Profile-2</option>
            <option value="Profile-3">Profile-3</option>
          </select>
            
            </div> </li>
        </ul>
      </div>
    </div>
    <div className={`w-[80%] bg-[#303946] h-screen absolute md:hidden top-0 pt-4 pl-4 ${nav ? 'hidden':''} `}>
        <ul>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><RiAccountCircleFill className='' /></span><p>Profile</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><FaHome className='' /></span><p>Deshboard</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><WiStars className='' /></span><p>FristGuru</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><FaBuilding className='' /></span><p>TownHall</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><AiFillThunderbolt className='' /></span><p>Al Evaluation</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><GoGraph className='' /></span><p>Performance</p></li>
           <li className='flex  text-white text-xl px-2 py-4  '><span className='pr-4 pt-[5px]'><TiDocumentText className='' /></span><p>Mock Test</p></li>
           
        </ul>
    </div>

    </>
  )
}

export default Navbar