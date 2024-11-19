export default function Home() {
  const NavList = [
    { step: 1, name: "Your info" },
    { step: 2, name: "Select plan" },
    { step: 3, name: "Add-ons" },
    { step: 4, name: "Summary" }
  ];

  return (//  max-h-[600px] min-w-[630px]
    <div className="grid items-center justify-items-center min-h-screen font-ubuntu font-normal bg-prMagnolia">
      <div className="p-4 grid  xl:max-w-6xl xl:w-3/4 rounded-2xl bg-opacity-0 xl:bg-prWhite xl:shadow-xl xl:grid-cols-3">
        <div className="fixed top-0 -right-4 -left-4 xl:right-0 xl:left-0 h-2/5 xl:h-auto xl:relative col-span-1 bg-[url('/assets/images/bg-sidebar-desktop.svg')] xl:rounded-xl bg-cover bg-bottom xl:bg-center">
          <ol className="grid grid-flow-col xl:grid-flow-row justify-center pt-12 gap-4 xl:p-8 xl:gap-8 ">
            {NavList.map((item) => (
              <li key={item.step} className="grid xl:grid-cols-4 items-center xl:gap-8">
                <h1 className=" w-10 h-10 text-lg xl:col-span-1 grid justify-center items-center border border-prWhite rounded-full xl:w-16 xl:h-16 xl:text-3xl ">{item.step}</h1>
                <div className="col-span-3 hidden xl:block">
                  <h6 className="font-ubuntu font-normal text-xs uppercase text-prCoolgray xl:text-xl">step {item.step}</h6> 
                  <h1  className="font-ubuntu font-bold text-sm uppercase  xl:text-xl" >{item.name}</h1>
                </div>
                
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-2  grid z-10 grid-rows-4 pt-8 xl:pt-12 bg-prWhite rounded-lg">
          <div className="grid row-span-3 px-4 content-start gap-8 xl:gap-12">
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
  );
}
/**
 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500

*/
