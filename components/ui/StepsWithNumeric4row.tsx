import React from 'react'

export const StepsWithNumeric4row = ({
    steps, otherClasses,
} : {
        steps: {
            id: number,
            title: string,
            startDesc1?: string,
            desc1?: string,
            startDesc2?: string,
            desc2?: string,
            startDesc3?: string,
            desc3?: string,
            startDesc4?: string,
            desc4?: string,
            startDesc5?: string,
            desc5?: string,
        }[];
        otherClasses?: string,
    }) => {

        // const evenRow = steps.filter((_, index) => index % 2 === 0);
        // const oddRow = steps.filter((_, index) => index % 2 !== 0);
  return (
    <div className="w-full grid grid-cols-1  md:px-1 mb-2 " id='stepsBuild'>
        {steps.map((step) => (
            <div key={step.id} className={`w-full flex flex-row justify-center items-start gap-4 rounded-xl p-4 md:p-2  md:mx-1 
             hover:scale-110 hover:skew-y-1  transition duration-300 hover:ease-in-out hover:shadow-xl cursor-pointer hover:rotate-1 ${otherClasses}`}>
                <p className="text-owlBrown text-5xl font-extrabold
                hover:scale-110hover:skew-y-1  transition duration-300 ease-in-out cursor-pointer hover:rotate-1">
                    {step.id}
                </p>
                <div className='w-full flex flex-col justify-start gap-1 md:gap-4'>
                    <p className="text-3xl font-bold text-left">
                        {' '}{step.title}
                    </p>
                    <div className='w-full flex flex-col justify-start gap-2'>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{step.startDesc1}</span> {step.desc1}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{step.startDesc2}</span> {step.desc2}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{step.startDesc3}</span> {step.desc3}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{step.startDesc4}</span> {step.desc4}
                        </p>
                        <p className="text-md lg:text-base text-normal">
                            <span className="font-bold">{step.startDesc5}</span> {step.desc5}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
