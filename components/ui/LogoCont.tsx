// "use client"
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
// import { useState } from 'react';

interface LogoContProps {
    image: string;
}

const LogoCont: React.FC<LogoContProps> = ({ image }) => {

  // const [ showOverlay, setShowOverlay ] = useState(false);
  
  return  (  
          <motion.div 
            className="grayscale hover:grayscale-0 !cursor-pointer transition duration-500 relative overflow-hidden h-[100px] min-w-[100px]  rounded-xl flex justify-center items-center" 
            // onHoverStart={() => setShowOverlay(true)}
            // onHoverEnd={() => setShowOverlay(false)}  
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}         
          >
            <AnimatePresence>
              {/* {showOverlay && (
                <motion.div
                  className='absolute inset-0 z-10 flex justify-center items-center'
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  exit={{ opacity:0 }} 
                >
                  <div className='absolute bg-black/10 pointer-events-none opacity-50 h-full w-full'/>                  
                </motion.div>
              )} */}
              <Image 
                  src={`/logos/${image}.svg`} 
                  alt={`logo ${image}`} 
                  fill
                  style={{ objectFit: "fill"}}
              />
            </AnimatePresence>
          </motion.div>
  );

}


export default LogoCont;
