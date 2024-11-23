"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from "zod";
import { useStep } from './StepContext';

const schema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z
  .string()
  .regex(/^\d+$/, { message: 'Phone number must contain only digits' }) // Ensure it's numeric
  .min(10, { message: 'Phone number must be at least 10 digits' })
  .transform((value) => parseInt(value, 10)),
});

type FormData = z.infer<typeof schema>;


export default function StepOne() {
  const { currentStep, setCurrentStep } = useStep();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setCurrentStep(currentStep + 1);
  };
  const onBack = () => {
    setCurrentStep(currentStep - 1);
  } 
  

  return (
    <div className='grid px-4 content-start gap-8 xl:gap-12'>
      
      <div>
        <h1 className="text-prarineblue text-2xl font-bold font-ubuntu xl:text-5xl">Personal info</h1>
        <p className="text-prCoolgray text-sm xl:text-2xl line-clamp-1">please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Name</span>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} type="text" placeholder="eg. stephen king" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-prCoolgray xl:text-xl" />}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Email Address</span>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="text" placeholder="eg. stephenking@lorem.com" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-prCoolgray xl:text-xl" />}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <span className="block text-sm font-medium text-prarineblue font-ubuntu xl:text-2xl">Phone Number</span>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <input {...field} type="string" placeholder="eg. +1 234 567 890" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-prCoolgray xl:text-xl" />}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
      </div>
      <div className="fixed bottom-0 right-0 left-0 xl:relative p-4 w-full grid grid-flow-col justify-between xl:justify-end xl:items-end bg-white">
        <button onClick={onBack} className="text-md font-medium text-prCoolgray font-ubuntu px-6 py-2 xl:text-xl xl:px-8 xl:py-4 xl:rounded-lg">
          Go Back
        </button>
        <button onClick={handleSubmit(onSubmit)} className="text-md font-medium text-prWhite font-ubuntu bg-prarineblue border rounded-md px-6 py-2 xl:text-xl xl:px-8 xl:py-4 xl:rounded-lg">
          Next Step
        </button>
      </div>
    </div>
  );
}
