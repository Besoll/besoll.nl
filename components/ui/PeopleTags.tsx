import React from 'react'

export const PeopleTags = ({
  Opener, Tags, OtherClasses
}: {
    Tags: {
        id: number,
        title: string,
    } [];
    OtherClasses?: string;
    Opener?: string;
}) => {
  return (
    <div className="w-full text-xs text-left flex flex-col gap-4 text-owlBrown justify-center items-center md:justify-start md:items-start">
      <p className=''>
        {Opener}
      </p>

      <div className='w-full flex flex-row gap-4 flex-wrap justify-center items-center md:justify-start md:items-start'>
        {Tags.map((tag) => (
          <div key={tag.id} className={`${OtherClasses}
          hover:scale-110 md:hover:skew-y-1 transition duration-300 ease-in-out md:hover:rotate-1 cursor-pointer
          `}>
            {tag.title} {' '}
          </div>        
        ))}
      </div>

    </div>
  )
}

