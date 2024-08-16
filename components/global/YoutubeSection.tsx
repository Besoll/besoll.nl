import dynamic from 'next/dynamic'
const YouTubeEmbed = dynamic(() => import('@/components/global/YouTubeEmbed')) 

const YoutubeSection = () => {
  return (
    <div className='relative max-w-7xl w-full flex justify-center gap-4 items-center py-32 flex-col md:flex-row px-2'>

        <div className="w-full md:w-1/3 flex justify-center items-center md:items-start flex-col gap-2">
            <h1 className='text-xl md:text-3xl font-bold text-center md:text-left  mt-1 md:mt-2 lg:mt-3'>
                Want to easily measure your website&apos;s performance?
            </h1> 
            <p className="text-md lg:text-base text-normal items-center md:items-start md:text-left text-center ">
            Watch the video to learn how. Also, compare your competitors&apos; website performance, and imagine if your performance could be the highest, all 100s. How highly could you be ranked by search engines compared to your competitors?
            </p> 
        </div>
        <YouTubeEmbed videoId="KU8i9Xp33sI" />
        
    </div>
  )
}

export default YoutubeSection