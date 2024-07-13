import React from 'react'

export const StepsWithoutNumeric = ({
    steps, otherClasses
} : {
        steps: {
            id: number,
            title: string,
            desc1: string,
            desc2: string,
            desc3: string,
            
        }[];
        otherClasses?: string,
    }) => {

        // const evenRow = steps.filter((_, index) => index % 2 === 0);
        // const oddRow = steps.filter((_, index) => index % 2 !== 0);
  return (
    <>
        {steps.map((step) => (
                <div  key={step.id} className={`md:w-1/3 w-full h-auto flex flex-col justify-start items-stretch gap-2 rounded-lg p-8 shadow-xl md:shadow-md md:hover:shadow-2xl md:hover:scale-110 md:hover:skew-y-1 md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1  ${otherClasses}`}>
                    <p className="text-xl font-bold">{step.title}</p>
                    <p className="text-base">{step.desc1}</p>
                    <p className="text-base">{step.desc2}</p>
                    <p className="text-base">{step.desc3}</p>
                </div> 
        ))}
    </>
  )
}
