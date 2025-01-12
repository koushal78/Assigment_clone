import img2 from '../assets/img2.jpg'
import { BsClipboardCheck } from "react-icons/bs";
import pic from '../assets/pic.png'
const LeftSideBar = () => {
  return (
    <div className='bg-slate-100 shadow-lg shadow-slate-100 w-fit rounded-md p-4'>
        <div className="my-2 flex flex-col justify-center items-center w-fit">
            <img src={img2} className='h-52 ' alt="" />
            <p className='text-2xl font-bold w-fit  text-center text-[#93478F] my-1'>Your Result </p>
            <p className='text-slate-500 w-fit text-center'>All your insights & details in one place</p>
        </div>

        <div className=" w-72 rounded-lg shadow-sm shadow-black h-fit p-4 flex  flex-col gap-3 ">
            <div className="flex justify-between h-fit w-full bg-[#eeefff] p-1 rounded-md">
                <div className="p-4 text-xl bg-[#a0a6fb] w-fit rounded-lg ">
            <BsClipboardCheck className='text-black' />

                </div>
                <div className="">
                    <p className='bg-[#595fba] text-white text-[12px] font-semibold  rounded-2xl w-fit p-1'>YOU'VE PASSED</p>
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
            <div className="bg-[#e3e4e7] px-1">
            <div className="flex  h-fit w-full bg-[#eeefff] p-1 rounded-md items-center ">
                <div className=" text-xl w-fit rounded-lg  mr-4">
                <img src={pic} className='h-[40px]' alt="" />

                </div>
                <div className=" mx-3">
                    <p className=' text-[#595fba] text-[10px] font-medium rounded-2xl w-fit p-1'>Top Score</p>
                    <p className='text-slate-400 text-[12px]'><span className='text-2xl text-black font-semibold '>230</span>/240</p>
                </div>
               

            </div>
            <div className='h-[2px] bg-slate-300 w-full my-2 '></div>
                <div className="flex justify-between my-2">
                    <div className="text-black text-sm font-semibold">
                        <span className='text-slate-400 font-light text-[12px]'>By </span>Parth Akotkar
                    </div>
                    <p className='font-semibold bg-[#1D9997] w-fit rounded-lg p-1 text-white text-[10px]'>92% ACCURACY</p>
                </div>
                <div className="my-2">
                <p className='font-semibold'>Improve your Marks</p>
                <p className='text-slate-400  text-[10px]'>Improve your score by practicing more.</p>
                </div>
                <button className='text-center bg-[#595fba] py-2  text-white w-full rounded-md '>Practice more</button>


            </div>
          

        </div>
        <div className="my-4 shadow-sm w-fit shadow-black rounded-md">
        <div class="h-64 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
  <div>
    <h2 class="text-xl font-semibold">Revisit Paper</h2>
    <p class="text-sm text-gray-600 mt-2">
      Challenge your friends by simply sharing a link to this test
    </p>
  </div>
  <div>
    <button class="w-full bg-indigo-600 text-white py-1 rounded-md flex items-center justify-center gap-2 hover:bg-indigo-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.707 10.707a1 1 0 00-1.414-1.414L10 15.586 3.707 9.293a1 1 0 10-1.414 1.414l7 7a1 1 0 001.414 0l7-7z" />
      </svg>
      Visit
    </button>
   
  </div>
  <p class="text-xs text-gray-400 mt-2 text-center">
      Instructions for how to upload your handwritten material is given
    </p>
</div>

        </div>
    </div>
  )
}

export default LeftSideBar