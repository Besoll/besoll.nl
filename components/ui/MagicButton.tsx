import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex  h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-2/3 md:w-60 md:mt-10" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FDA800_0%,#883D07_50%,#FDA800_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-white hover:bg-owlOrange hover:text-owlBrown backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton