"use client"
import React from 'react';
import { StepProvider } from './components/StepContext';
import Steper from './components/steper';
import StepOne from './components/StepOne';

const navList = [
  {
    name: "Your info",
    form: <StepOne />,
  },
  {
    name:  "Select plan",
    form: <div><StepOne /></div>,
  },
  {
    name: "Add-ons",
    form: <div>Step 3 Content</div>,
  },
  {
    name: "Summary",
    form: <div>Step 4 Content</div>,
  },
];

export default function Home() {
  return (
    <StepProvider>
      <div className="grid items-center justify-items-center min-h-screen font-ubuntu font-normal bg-prMagnolia">
        <Steper navList={navList} />
      </div>
    </StepProvider>
  );
}
