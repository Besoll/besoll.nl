import Image from 'next/image'
import swiperButtonPrev from '@/public/icons/swiper-button-prev.svg'

const SwiperButtonPrev = () => (
    <Image 
      src={swiperButtonPrev} 
      alt='arrow icon'
      width={64}
      height={64}
      loading='lazy'
      className='w-[64px] h-auto'
    />
  );
  
  export default SwiperButtonPrev;