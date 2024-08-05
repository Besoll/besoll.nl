import React from 'react'

export const NumberingP = ({
    Opener, Closer, NumberItems, OtherClasses
}: {
    NumberItems: {
        id: number,
        title: string,
        desc1?: string,
        desc2?: string,
        desc3?: string,
    } [];
    OtherClasses?: string;
    Opener?: string;
    Closer?: string;
}) => {
  return (
    <div className="text-md lg:text-xl text-lg text-center md:text-left flex flex-col gap-2">
      {Opener}

      {NumberItems.map((item) => (
        <div key={item.id} className={`w-full flex justify-start items-start flex-col gap-1 ${OtherClasses}`}>
            
            <div className='pl-2 flex flex-row gap-1'>
                <div>
                    {item.id}.
                </div>
                <div>
                    {item.title}                     
                </div>
            </div>
            <p className='text-md  pl-8'>
                {item.desc1} 
                {item.desc2} 
                {item.desc3}
            </p>
        </div>        
      ))}
      <div className='hidden md:flex'>
        {Closer}
      </div>
    </div>
  )
}

