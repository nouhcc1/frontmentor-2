import React from 'react'
import StepOne from './StepOne'

export default function Steper({navList}) {
  return (
    <div>
       <div className="p-4 grid  rounded-2xl  xl:bg-prWhite xl:shadow-xl xl:grid-cols-3">
        <div className="fixed top-0 -right-4 -left-4 xl:right-0 xl:left-0 h-2/5 xl:h-auto xl:relative col-span-1 bg-[url('/assets/images/bg-sidebar-desktop.svg')] xl:rounded-xl bg-cover bg-bottom xl:bg-center">
          <ol className="grid grid-flow-col xl:grid-flow-row justify-center pt-12 gap-4 xl:p-8 xl:gap-8 ">
            {navList.map((item,step:number) => (
              <li key={step} className="grid xl:grid-cols-4 items-center xl:gap-8">
                <h1 className=" w-10 h-10 text-lg xl:col-span-1 grid justify-center items-center border border-prWhite rounded-full xl:w-14 xl:h-14 xl:text-2xl ">{item.step}</h1>
                <div className="col-span-3 hidden xl:block">
                  <h6 className="font-ubuntu font-normal text-xs uppercase text-prCoolgray xl:text-xl">step {step}</h6> 
                  <h1  className="font-ubuntu font-bold text-sm uppercase  xl:text-xl" >{item.name}</h1>
                </div>
                
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-2  grid z-10 grid-rows-4 pt-8 xl:pt-12 bg-prWhite rounded-lg">
          <div className=" row-span-3">
            <StepOne></StepOne>
          </div>
          <div className="fixed bottom-0 right-0 left-0 xl:relative p-4  w-full grid grid-flow-col justify-between xl:justify-end xl:items-end bg-white">
            <button className="text-md font-medium text-prCoolgray font-ubuntu px-6 py-2 xl:text-xl xl:px-8 xl:py-4 xl:rounded-lg xl:hidden">
                Go Back
              </button>
            <button className="text-md font-medium text-prWhite font-ubuntu bg-prarineblue border rounded-md px-6 py-2 xl:text-xl xl:px-8 xl:py-4 xl:rounded-lg">
              Next Step
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
