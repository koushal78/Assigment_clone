import img2 from '../assets/img2.jpg'
import { BsClipboardCheck } from "react-icons/bs";
import pic from '../assets/pic.png'
const SideBar = () => {
  return (
    <div>
        <div className="my-2">
            <img src={img2} className='h-52 mx-auto' alt="" />
            <p className='text-2xl font-bold  text-center text-[#93478F] my-1'>Your Result </p>
            <p className='text-slate-500 text-center'>All your insights & details in one place</p>
        </div>

        <div className=" w-72 rounded-lg shadow-lg shadow-black h-64 p-4 flex  flex-col gap-3 ">
            <div className="flex justify-between h-fit w-full bg-[#eeefff] p-1 rounded-md">
                <div className="p-4 text-xl bg-[#a0a6fb] w-fit rounded-lg ">
            <BsClipboardCheck className='text-black' />

                </div>
                <div className="">
                    <p className='bg-[#595fba] text-white text-[10px] font-medium rounded-2xl w-fit p-1'>YOU'VE PASSED</p>
                    <p className='text-slate-400 text-[12px]'><span className='text-2xl text-black font-semibold '>136</span>/240</p>
                </div>
                <div className='flex items-center'>
                    <span className='text-2xl h-full w-[2px] bg-slate-300 mx-1'></span>
                    <div>
                        <p className=' px-1 bg-[#1D9997] text-white font-medium rounded-md w-fit text-sm'>76%</p>
                        <p className='text-[#1D9997] text-sm  w-fit'>ACCURACY</p>
                    </div>
                </div>

            </div>
            <div className="bg-[#eeefff]">
            <div className="flex  h-fit w-full bg-[#eeefff] p-1 rounded-md items-center ">
                <div className=" text-xl w-fit rounded-lg  mr-4">
                <img src={pic} className='h-[40px]' alt="" />

                </div>
                <div className=" mx-3">
                    <p className='bg-[#595fba] text-white text-[10px] font-medium rounded-2xl w-fit p-1'>YOU'VE PASSED</p>
                    <p className='text-slate-400 text-[12px]'><span className='text-2xl text-black font-semibold '>136</span>/240</p>
                </div>
               

            </div>
            <div className='h-[2px] bg-slate-300 w-full my-2 '></div>

            </div>
          

        </div>
        <div className=""></div>
    </div>
  )
}

export default SideBar