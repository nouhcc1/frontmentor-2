import Steper from "./components/steper";

export default function Home() {
  const NavList = [
    { step: 1, name: "Your info" },
    { step: 2, name: "Select plan" },
    { step: 3, name: "Add-ons" },
    { step: 4, name: "Summary" }
  ];

  return (
    <div className="grid items-center justify-items-center min-h-screen font-ubuntu font-normal bg-prMagnolia">
        <Steper navList={NavList}></Steper>
    </div>
  );
}
/**
 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500

*/
