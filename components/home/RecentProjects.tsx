import { projects } from '@/data'
import { PinContainer } from '@/components/ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-16 gap-y-8 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className='h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] sm:w-[570px] w-[80vw] flex items-center justify-center'>
                    <PinContainer title={link} href={link}>
                        <div className='w-[80vw] sm:w-[570px] h-[30vh] sm:h-[40vh] relative flex justify-center items-center overflow-hidden mb-10 '>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                                <Image 
                                    src="/bg.png"
                                    alt="project background"
                                    width={20}
                                    height={20}
                                    className='w-full h-auto'
                                />
                            </div>
                            <Image 
                                    src={img}
                                    alt={title}
                                    width={20}
                                    height={20}
                                    className='w-full h-atuo z-10 absolute bottom-0'
                                />
                        </div>

                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex justify-between items-center mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{ transform: `translateX(-${5 * index * 2}px)`}}>
                                        <Image 
                                            src={icon}
                                            alt={icon}
                                            width={20}
                                            height={20}
                                            className='w-full h-atuo p-2'
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color="#CBACF9"/>
                            </div>
                        </div>

                    </PinContainer>
                </div>
            ))}
        </div>

    </div>
  )
}

export default RecentProjects