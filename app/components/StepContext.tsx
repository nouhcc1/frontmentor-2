import React, { createContext, useState, useContext, ReactNode } from 'react';

interface StepContextProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepContext = createContext<StepContextProps | undefined>(undefined);

export const StepProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};
