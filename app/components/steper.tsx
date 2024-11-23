
import { useStep } from './StepContext';

interface NavItem {
  name: string;
  form: React.ReactNode;
}

interface SteperProps {
  navList: NavItem[];
}

export default function Steper({ navList }: SteperProps) {
  const { currentStep } = useStep();
  return (
    <div>
      <div className="p-4 grid rounded-2xl xl:bg-prWhite xl:shadow-xl xl:grid-cols-3">
        <div className="fixed top-0 -right-4 -left-4 xl:right-0 xl:left-0 h-2/5 xl:h-auto xl:relative col-span-1 bg-[url('/assets/images/bg-sidebar-desktop.svg')] xl:rounded-xl bg-cover bg-bottom xl:bg-center">
          <ol className="grid grid-flow-col xl:grid-flow-row justify-center pt-12 gap-4 xl:p-8 xl:gap-8 ">
            {navList.map((item: NavItem, step: number) => (
              <li key={step} className="grid xl:grid-cols-4 items-center xl:gap-8">
                <h1 className={`w-10 h-10 text-lg xl:col-span-1 grid justify-center items-center border border-prWhite rounded-full xl:w-14 xl:h-14 xl:text-2xl ${currentStep === step ? 'bg-prarineblue text-prWhite' : ''}`}>{step+1}</h1>
                <div className="col-span-3 hidden xl:block">
                  <h6 className="font-ubuntu font-normal text-xs uppercase text-prCoolgray xl:text-xl">step {step+1}</h6>
                  <h1 className="font-ubuntu font-bold text-sm uppercase xl:text-xl">{item.name}</h1>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-2 grid z-10 pt-8 xl:pt-12 bg-prWhite rounded-lg">
          <div className="">
            {navList[currentStep].form}
          </div>
        </div>
      </div>
    </div>
  );
}
