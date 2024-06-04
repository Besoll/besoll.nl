import Link from 'next/link'
import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))
const MobileVraagAan = dynamic(() => import('@/components/icons/MobileVraagAan'))

const CtaButton1 = () => {
  return (
    <>
       {/* on Desktop Only */}
        <Link 
            href="#formSection" 
            className="w-[120px] h-auto flex-row justify-center items-center text-center text-base font-semibold
                    bg-magenta hover:bg-magenta text-white dark:invert shadow-xl px-4 py-2 rounded-xl 
                        hover:scale-105 transition duration-300 ease-in-out
                        md:flex hidden
            " >
                Vraag aan 
                <HandIndex />
        </Link>

        {/* on Mobile Only */}
        <Link href="#formSection" className="md:hidden" >
            <MobileVraagAan />
        </Link>
    </>
  )
}

export default CtaButton1