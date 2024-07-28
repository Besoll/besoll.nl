"use client"
import { animate, motion, useMotionValue } from "framer-motion";
import LogoCont from "../ui/LogoCont";
import useMeasure from "react-use-measure"
import { useEffect, useState } from "react";

interface LogoContProps {
    image: string;
}

export default function LogoCarousel() {
  
  const images = [
    'AWS',
    'BlackmagicDesign',
    'Cloudflare',
    'CookieYes',
    'Elementor',
    'Figma',
    'GoogleAds',
    'Instapage',
    'Logo_Google_Analytics',
    'Mailchimp',
    'Meta',
    'Microsoft',
    'monday.com',
    'Next.js',
    'Semrush',
    'Slack',
    // 'Tiktok',
    'TransIP',
    'Youtube',
    'Zapier',
    'ZOHO',
    // 'github',
    'tailwindcss',    
  ];
  const FAST_DURATION = 35;
  const SLOW_DURATION = 95;

  const [ duration, setDuration ] = useState(FAST_DURATION)

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });      
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });      
    }


    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="py-8 md:pb-32">
      <motion.div 
        className="absolute left-0 flex gap-4" 
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <LogoCont image={item} key={idx} />
        ))}
      </motion.div>
    </div>
  )
}
