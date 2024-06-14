import React from 'react'
import HowWeBuild from '../home/HowWeBuild';

export const StepsHowWeBuild = ({
    buildSteps, 
} : {
        buildSteps: {
            id: number,
            title: string,
            startDesc1: string,
            desc1: string,
            startDesc2: string,
            desc2: string,
            startDesc3: string,
            desc3: string,
        }[];
    }) => {

        // const evenRow = buildSteps.filter((_, index) => index % 2 === 0);
        // const oddRow = buildSteps.filter((_, index) => index % 2 !== 0);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-2 mb-2">
        {buildSteps.map((buildStep) => (
            <div key={buildStep.id} className="w-full flex flex-row justify-center items-start gap-4 rounded-xl p-8 m-4 mx-4
            hover:bg-white hover:scale-110 hover:skew-y-1  transition duration-300 :ease-in-out hover:shadow-xl cursor-pointer hover:rotate-1">
                <p className="text-owlBrown text-5xl font-extrabold
                hover:scale-110hover:skew-y-1  transition duration-300 ease-in-out cursor-pointer hover:rotate-1">
                    {buildStep.id}
                </p>
                <div className='w-full flex flex-col justify-start gap-4'>
                    <p className="text-3xl font-bold text-left">
                        {' '}{buildStep.title}
                    </p>
                    <div className='w-full flex flex-col justify-start gap-2'>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{buildStep.startDesc1}</span>{' '} {buildStep.desc1}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{buildStep.startDesc2}</span>{' '} {buildStep.desc2}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{buildStep.startDesc3}</span>{' '} {buildStep.desc3}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
