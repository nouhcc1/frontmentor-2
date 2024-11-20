import React from 'react'

export default function StepOne() {
  return (
    <div className='grid px-4 content-start gap-8 xl:gap-12'>
            <div>
              <h1 className="text-prarineblue text-2xl font-bold font-ubuntu xl:text-5xl">Personal info</h1>
              <p className="text-prCoolgray text-sm xl:text-2xl line-clamp-1">please provide your name, email address,and phone number.</p>
            </div>
            <div>
              <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Name</span>
              <input type="text" value="eg. stephen king" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-prCoolgray xl:text-xl"/>
            </div>
            <div>
              <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Email Address</span>
              <input type="text" value="eg. stephenking@lorem.com" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-prCoolgray xl:text-xl"/>
            </div>
            <div>
              <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Phone Number</span>
              <input type="text" value="eg. +1 234 567 890" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm  text-prCoolgray xl:text-xl"/>
            </div>
    </div>
  )
}
