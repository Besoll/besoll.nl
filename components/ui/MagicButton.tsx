import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses, otherClassesButton
}: {
    title: string;
    icon?: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
    otherClassesButton?: string;
}) => {
  return (
    <button className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full hover:shadow-xl md:transition md:duration-300 md:ease-in-out md:w-full text-white ${otherClassesButton}`} onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.1)_100%)] blur-md" />
<span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm transition duration-300 ease-in-out font-medium hover:scale-105 backdrop-blur-lg gap-2 bg-white bg-opacity-10 ${otherClasses}`}>

            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton