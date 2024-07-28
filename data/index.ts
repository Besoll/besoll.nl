export const navItems = [
    { id: 1, name: "About us", link: "/our-team", ariaLabel: "Navigate to about us page", },
    { id: 2, name: "Services", link: "#", ariaLabel: "Navigate to services page", },
    { id: 3, name: "Contact", link: "/contact", ariaLabel: "Navigate to contact page", },
  ];

  export const navItemsStatic = [
    { id: 1, name: "Top Speed", link: "/top-speed", ariaLabel: "Navigate to top speed page", },
    { id: 2, name: "Landing Page", link: "/landing-page", ariaLabel: "Navigate to landing page", },
    { id: 3, name: "WebMaster Pro", link: "#", ariaLabel: "Navigate to webmaster-pro", },
    { id: 4, name: "About us", link: "/our-team", ariaLabel: "Navigate to about us page", },
    { id: 5, name: "Services", link: "#", ariaLabel: "Navigate to services page", },
    { id: 6, name: "Contact", link: "/contact", ariaLabel: "Navigate to contact page", },
  ];

  export const footerItemsPages = [
    { id: 1, name: "About us", link: "/our-team", ariaLabel: "Navigate to about us page", },
    { id: 2, name: "Projects", link: "#", ariaLabel: "Navigate to projects page", },
    { id: 3, name: "Services", link: "#", ariaLabel: "Navigate to services page", },
    { id: 4, name: "Testimonials", link: "#", ariaLabel: "Navigate to testimonials page", },
    { id: 5, name: "Contact", link: "/contact", ariaLabel: "Navigate to contact page", },
  ];
  export const footerItemsTerms = [
    { id: 1, name: "Terms and Conditions", link: "#", ariaLabel: "Navigate to Terms and Conditions page", },
    { id: 2, name: "Disclaimer", link: "#", ariaLabel: "Navigate to Disclaimer page", },
    { id: 3, name: "Imprint", link: "#", ariaLabel: "Navigate to Imprint page", },
    { id: 4, name: "Cookie Policy (EU)", link: "#", ariaLabel: "Navigate to our team page", },
    { id: 5, name: "Privacy Statement (EU)", link: "#", ariaLabel: "Navigate to our team page", },
  ];

  export const footerItemsIcons = [
    { id: 1, as: "Image", icon: "/icons/Guarantee10Years-Big.svg", name: "Guarantee 10 years"},
    { id: 2, as: "IframeComponent", icon: "/icons/Guarantee10Years-Big.svg", name: "klientreviews"},
  ];

  export const footerItemsCredentials = [
    { id: 1, icon: "mobile", name: "+31 613 73 45 46", link: "tel:003613734546", ariaLabel: "Navigate to call us", },
    { id: 2, icon: "email", name: "info@owlweb.nl", link: "mailto:info@owlweb.nl", ariaLabel: "Navigate to email us", },
    { id: 3, icon: "map", name: "Mendelssohnstraat 1, 3281VH Numansdorp", link: "https://www.google.com/maps/place/Mendelssohnstraat+1,+3281+VH+Numansdorp/@51.7369636,4.4336364,17z/data=!3m1!4b1!4m6!3m5!1s0x47c4399aa1cb360b:0x71b0380339d31d8d!8m2!3d51.7369636!4d4.4336364!16s%2Fg%2F11c5nqjmkg?entry=ttu", ariaLabel: "Navigate to our addres on google map", },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Custom Website Development",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/services/1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/services/1.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/services/1.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/services/1.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

  export const ourServices = [
    {
      id: 1,
      title: "Web Development Services",
      desc: "We build awesome custom websites, from full-stack development to custom web apps that fit your business perfectly. Got an online store? We've got you covered with top-notch e-commerce solutions. Need a CMS like WordPress or Drupal? No problem, we do that too, and we can even create a custom one just for you. Got APIs on your mind? We create custom APIs and integrate third-party ones to make your systems super functional. And do not worry about maintenance — we keep your site updated, secure, and running at lightning speed.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/services/1.svg",
      link: "",
    },
    {
      id: 2,
      title: "Mobile App Development Services",
      desc: "Whether you need an iOS or Android app, we craft native mobile apps that look and feel amazing. Prefer one app for all platforms? We have got cross-platform magic with React Native and Flutter. Plus, we develop Progressive Web Apps (PWA) that combine the best of web and mobile worlds.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/services/2.svg",
      link: "",
    },
    {
      id: 3,
      title: "UX/UI Design Services",
      desc: "Our UX design ensures your website is a dream to navigate. We dig into user research, create personas, wireframe, prototype, and test usability to keep things user-centric. For UI, we focus on stunning visuals, smooth interactions, and responsive design to make sure your site looks great everywhere. Got a product idea? We help bring it to life, from concept to MVP, with designs that captivate and engage.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/services/3.svg",
      link: "",
    },
    {
      id: 4,
      title: "Software Development Services",
      desc: "We create custom software solutions tailored to your needs, including enterprise software and SaaS applications. Our software architecture services ensure your systems are scalable and efficient, with smart designs like microservices. Ready for the cloud? We build cloud apps, help with cloud migrations, and manage cloud infrastructure to keep your business running smoothly and efficiently.",
      className: "md:col-span-2",
      thumbnail: "/services/4.svg",
      link: "",
    },
    {
      id: 5,
      title: "Digital Transformation Services",
      desc: "Need a digital makeover? We provide strategy consulting to navigate digital transformation. Automate your business processes and optimize workflows for better efficiency. We also offer data analytics and business intelligence to help you make smart, informed decisions.",
      className: "md:col-span-2",
      thumbnail: "/services/5.svg",
      link: "",
    },
    {
      id: 6,
      title: "E-commerce Solutions",
      desc: "Looking to sell online? We develop custom e-commerce platforms and work with Shopify, Magento, and WooCommerce. Whether it’s a multi-vendor marketplace or a specialized B2B/B2C setup, we optimize for performance and conversions to keep your customers happy.",
      className: "md:col-span-2",
      thumbnail: "/services/6.svg",
      link: "",
    },
    {
      id: 7,
      title: "Marketing and SEO Services",
      desc: "Want to be seen? Our SEO services boost your visibility with technical SEO, on-page, and off-page strategies. We handle digital marketing with content, social media, and PPC advertising to get your brand out there. Need a fresh look? Our branding services include logo design and brand strategy to make you stand out.",
      className: "md:col-span-2",
      thumbnail: "/services/7.svg",
      link: "",
    },
    {
      id: 8,
      title: "DevOps and IT Services",
      desc: "We offer DevOps consulting with CI/CD and infrastructure as code (IaC) to streamline your operations. Our IT services include server and database management and network security. Plus, we set up and manage cloud infrastructure on AWS, Azure, and Google Cloud.",
      className: "md:col-span-2",
      thumbnail: "/services/8.svg",
      link: "",
    },
    {
      id: 9,
      title: "Project Management Services",
      desc: "We rock agile project management with Scrum and Kanban, sprint planning, and management. Our product management covers the entire lifecycle, from planning to launch. For technical projects, we handle requirement analysis, specifications, and risk management to keep things on track.",
      className: "md:col-span-2",
      thumbnail: "/services/9.svg",
      link: "",
    },
    {
      id: 10,
      title: "Training and Consulting Services",
      desc: "Need to upskill your team? We provide training on the latest tech, onboarding, and continuous learning. Our business consulting services optimize processes and plan IT strategies. Plus, we run workshops on design thinking, innovation, and creativity to keep you ahead of the curve.",
      className: "md:col-span-2",
      thumbnail: "/services/10.svg",
      link: "",
    },
    {
      id: 11,
      title: "Specialized Services",
      desc: "Interested in blockchain? We develop smart contracts and dApps. Our AI and machine learning solutions include AI development and model training. And for IoT enthusiasts, we create IoT applications and integrate devices to connect your world. Our diverse range of B2B services ensures we meet all your business needs, helping you achieve your goals with innovative and effective tech solutions. Let's make your business awesome!",
      className: "md:col-span-2",
      thumbnail: "/services/11.svg",
      link: "",
    },
    {
      id: 12,
      title: "General Digital Marketing Services",
      desc: "Boost your online presence with our comprehensive digital marketing services. We specialize in SEO to improve your website's visibility on search engines. Our content marketing strategies create engaging content that attracts your target audience. We excel in social media marketing, ensuring your brand is active on platforms like Facebook, Instagram, Twitter, and LinkedIn. We also manage pay-per-click (PPC) campaigns to drive targeted traffic to your site, maximizing your ROI. Our holistic approach ensures all your digital marketing efforts work together to achieve your business goals.",
      className: "md:col-span-2",
      thumbnail: "/services/12.svg",
      link: "",
    },
  ];

  export const buildSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      startDesc1: "Let's Chat:",
      desc1: "We start by having a friendly conversation to understand your vision, goals, and specific needs. This helps us get a clear picture of what you're looking for.",
      startDesc2: "",
      desc2: "",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Research and Planning",
      startDesc1: "Getting to Know You:",
      desc1: "We dive deep into research about your industry, competitors, and target audience.",
      startDesc2: "Blueprint Creation:",
      desc2: "We create a detailed project plan outlining the website's structure, features, and user journey.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Wireframing and Prototyping",
      startDesc1: "Sketching the Layout:",
      desc1: "We design wireframes to map out the basic structure of your website.",
      startDesc2: "Interactive Prototypes:",
      desc2: "We build clickable prototypes to give you a feel of how the final product will look and function.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 4,
      title: "Design and UX/UI",
      startDesc1: "Design Magic:",
      desc1: "Our talented designers craft stunning visuals and user-friendly interfaces that reflect your brand.",
      startDesc2: "User Experience:",
      desc2: "We focus on creating intuitive and engaging experiences for your visitors.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 5,
      title: "Development",
      startDesc1: "Building the Backbone:",
      desc1: "Using the latest technologies like Next.js, TailwindCSS, and TypeScript, we develop the website’s backend and frontend.",
      startDesc2: "Serverless Deployment:",
      desc2: "We deploy your site on Vercel for optimal performance and scalability.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 6,
      title: "Content Integration",
      startDesc1: "Adding Your Words:",
      desc1: "We integrate your content, ensuring it’s SEO-friendly and engaging.",
      startDesc2: "Multimedia Magic:",
      desc2: "We incorporate images, videos, and other media to enhance the user experience.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 7,
      title: "Optimization",
      startDesc1: "Speed Demon:",
      desc1: "We optimize the website to ensure lightning-fast load times and smooth performance.",
      startDesc2: "SEO Excellence:",
      desc2: "We fine-tune everything to achieve top scores on all Lighthouse metrics, including Performance, Accessibility, Best Practices, and SEO.",
      startDesc3: "PWA Ready:",
      desc3: "On request, we can also set up Progressive Web App (PWA) functionality for an additional fee.",
    },
    {
      id: 8,
      title: "Testing and Quality Assurance",
      startDesc1: "Bug Hunt:",
      desc1: "We conduct thorough testing to ensure there are no glitches.",
      startDesc2: "User Testing:",
      desc2: "We perform usability testing to make sure the site is intuitive and user-friendly.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 9,
      title: "Launch",
      startDesc1: "Go Live:",
      desc1: "Once everything is perfect, we launch your website and ensure a smooth transition.",
      startDesc2: "Post-Launch Support:",
      desc2: "We monitor the site to catch any post-launch issues and provide ongoing support.",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 10,
      title: "Maintenance and Updates",
      startDesc1: "Staying Fresh:",
      desc1: "We offer maintenance plans to keep your website up-to-date with the latest technologies and trends.",
      startDesc2: "Continuous Improvement:",
      desc2: "You can opt for monthly updates to keep your content and features fresh and relevant.",
      startDesc3: "",
      desc3: "",
    },
  ];

  export const secMetricsNumeric = [
    {
      id: 1,
      title: "Speed",
      startDesc1: "",
      desc1: "Your site will load faster than ever with smart technology and careful design.",
      startDesc2: "",
      desc2: "",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Easy to Use",
      startDesc1: "",
      desc1: "Everyone can navigate and enjoy your site, no matter their device.",
      startDesc2: "",
      desc2: "",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Mobile-Friendly:",
      startDesc1: "",
      desc1: "Your website will work well on all devices therefore will attract more visitors",
      startDesc2: "",
      desc2: "",
      startDesc3: "",
      desc3: "",
    },
    {
      id: 4,
      title: "SEO Optimized:",
      startDesc1: "",
      desc1: "Proper use of keywords and meta tags helps search engines understand your content - our expert SEO techniques",
      startDesc2: "",
      desc2: "",
      startDesc3: "",
      desc3: "",
    }
  ];

  export const secMetricsSteps = [
    {
      id: 1,
      title: "Higher Google Rankings:",
      desc1: "Get found easily on Google with our websites that score near-perfect on speed and user experience.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Save on Ads:",
      desc1: "Spend less on advertising with a fast website that keeps visitors engaged.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Happy Visitors:",
      desc1: "Users love our easy-to-use sites that work perfectly on phones, tablets, and computers.",
      desc2: "",
      desc3: "",
    }
  ];

  export const secMetricsStepsMain = [
    {
      id: 1,
      title: "Visibility:",
      desc1: "Higher rankings on Google mean more people see your website.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Trust",
      desc1: "Top search results are seen as more trustworthy and credible by users.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Traffic",
      desc1: "Better rankings lead to more visitors, increasing your potential for sales and leads.",
      desc2: "",
      desc3: "",
    }
  ];

  export const secLPstepsMain = [
    {
      id: 1,
      title: "Targeted conversion",
      desc1: "you know what the visitor is interested in",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "The conversion rate",
      desc1: "of a landing page is higher than that of a regular website",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "By A/B testing",
      desc1: "we can get better results as these tests help us determine which version of the page is more effective in driving conversions.",
      desc2: "",
      desc3: "",
    }
  ];

  export const secLPsteps = [
    {
      id: 1,
      title: "Targeted Focus:",
      desc1: "Each landing page is tailored to a specific service or product, making it easier for visitors to find exactly what they&apos;re looking for.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "High Performance:",
      desc1: "Our landing pages load super fast and score near-perfect on Google Pagespeed Insights, ensuring a smooth and satisfying user experience.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Increased Trust:",
      desc1: "With a focused landing page, users see you as an expert in that specific area, boosting their trust and confidence in your brand.",
      desc2: "",
      desc3: "",
    }
  ];

  export const secLPsteps2 = [
    {
      id: 1,
      title: "Focused Content:",
      desc1: "The hero section showcases your best electric mountain bike. Every section below highlights its features, benefits, and customer reviews. There are no distractions, just the information they need.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Enhanced User Experience:",
      desc1: "Visitors don&apos;t have to sift through irrelevant products. They find what they want quickly, making them more likely to stay and convert.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Higher Conversion Rates:",
      desc1: "A specialized landing page speaks directly to the visitor’s needs, making them more likely to trust you and make a purchase.",
      desc2: "",
      desc3: "",
    }
  ];

  export const secLPsteps3 = [
    {
      id: 1,
      title: "Lightning Fast:",
      desc1: "Near-perfect performance scores ensure visitors stay engaged.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "SEO Optimized:",
      desc1: "Better search rankings mean more visibility and traffic.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Expert Design:",
      desc1: "Tailored to showcase your expertise and convert visitors into leads.",
      desc2: "",
      desc3: "",
    }
  ];

  export const pNumberingWaaS = [
    {
      id: 1,
      title: "Discovery Phase: ",
      desc1: "We start with an in-depth interview to understand your goals, review your previous websites, and explore your products and services.",
      desc2: "",
      desc3: "",
    },
    {
      id: 2,
      title: "Content Creation: ",
      desc1: "Our photographer collaborates with you to capture compelling visuals of your team and offerings.",
      desc2: "",
      desc3: "",
    },
    {
      id: 3,
      title: "Copywriting: ",
      desc1: "Our expert copywriters develop engaging and memorable headlines and subheadlines to captivate your audience.",
      desc2: "",
      desc3: "",
    },
    {
      id: 4,
      title: "Development & Optimization: ",
      desc1: "Our skilled Back-End and Front-End Developers, alongside SEO specialists, build your site, including up to 30 targeted landing pages (depending on your product and service range). ",
      desc2: "The basic package includes 5 landing pages.",
      desc3: "",
    }
  ];

  export const peopleInvolvedWaaS = [
    {
      id: 1,
      title: "Account manager ",
    },
    {
      id: 2,
      title: "Content Creator",
    },
    {
      id: 3,
      title: "Copywriter",
    },
    {
      id: 4,
      title: "Photographer",
    },
    {
      id: 5,
      title: "UI/UX Designer",
    },
    {
      id: 6,
      title: "Back-End Developer",
    },
    {
      id: 7,
      title: "Front-End Developer",
    },
    {
      id: 8,
      title: "SEO Optimiser",
    }
  ];

  export const peopleInvolvedDRM = [
    {
      id: 1,
      title: "Account manager ",
    },
    {
      id: 2,
      title: "Content Creator",
    },
    {
      id: 3,
      title: "Copywriter",
    },
    {
      id: 4,
      title: "Photographer",
    },
    {
      id: 5,
      title: "Graphic Designer",
    },
    {
      id: 6,
      title: "SEO Optimiser",
    },
    {
      id: 7,
      title: "SEA Specialist",
    }
  ];

  export const ourTeam = [
    {
      id: 1,
      name: "Nino",
      surname: "Beridze",      
      position: "Chief Hoot (Founder & CEO)",
      desc: "Nino is the visionary leader, ensuring the company's growth and strategic direction.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/1.webp",
      department: "Leadership Team",
    },
    {
      id: 2,
      name: "Besik",
      surname: "Kavzharadze",
      position: "Chief Tech Owl (Founder & CTO)",
      desc: "Besik ensures our technology infrastructure is top-notch, leading our tech innovations.",
      country: "Netherlands",
      thumbnail: "/OwlWebTeam/2.webp",
      department: "Leadership Team",
    },
    {
      id: 3,
      name: "Nini",
      surname: "Kavzharadze",
      position: "Chief Marketing Owl (Founder & Head of Marketing)",
      desc: "Nino is the creative force behind our marketing strategies, driving brand growth and innovation.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/3.webp",
      department: "Leadership Team",
    },
    {
      id: 4,
      name: "Ana",
      surname: "Tsiklauri",
      position: "COO (Chief Operating Officer)",
      desc: "Ana oversees the company's operations, making sure everything runs smoothly.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/4.webp",
      department: "Leadership Team",
    },
    {
      id: 5,
      name: "Levan",
      surname: "Kobaladze",
      position: "CTO (Chief Technology Officer)",
      desc: "Levan is the tech guru, leading our development team to build amazing products.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/5.webp",
      department: "Leadership Team",
    },
    {
      id: 6,
      name: "Giorgi",
      surname: "Abashidze",
      position: "Lead UX/UI Designer",
      desc: "Giorgi creates user-friendly and visually appealing designs for our clients.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/6.webp",
      department: "Design Team",
    },
    {
      id: 7,
      name: "Tatia",
      surname: "Chikvaidze",
      position: "Senior Graphic Designer",
      desc: "Tatia brings ideas to life with her creative graphic designs.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/7.webp",
      department: "Design Team",
    },
    {
      id: 8,
      name: "Mariam",
      surname: "Javakhishvili",
      position: "UX/UI Designer",
      desc: "Mariam focuses on making sure our designs meet user needs and preferences.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/8.webp",
      department: "Design Team",
    },
    {
      id: 9,
      name: "Oleksii",
      surname: "Ivanov",
      position: "Graphic Designer",
      desc: "Oleksii adds a touch of creativity to all our graphic design projects.",
      country: "Ukraine",
      thumbnail: "/OwlWebTeam/9.webp",
      department: "Design Team",
    },
    {
      id: 10,
      name: "Eka",
      surname: "Meladze",
      position: "Web Designer",
      desc: "Eka designs beautiful and functional websites for our clients.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/10.webp",
      department: "Design Team",
    },
    {
      id: 11,
      name: "Natalia",
      surname: "Rutkowska",
      position: "UX Researcher",
      desc: "Natalia conducts user research to ensure our designs are user-centric.",
      country: "Poland",
      thumbnail: "/OwlWebTeam/11.webp",
      department: "Design Team",
    },
    {
      id: 12,
      name: "Nino",
      surname: "Kaladze",
      position: "Senior Developer",
      desc: "Nino leads our development team, ensuring the highest quality of code.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/12.webp",
      department: "Development Team",
    },
    {
      id: 13,
      name: "Shota",
      surname: "Kharatishvili",
      position: "Full Stack Developer",
      desc: "Shota is our versatile developer, handling both front-end and back-end tasks.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/13.webp",
      department: "Development Team",
    },
    {
      id: 14,
      name: "Vishal",
      surname: "Patel",
      position: "Front End Developer",
      desc: "Vishal creates stunning user interfaces for our web applications.",
      country: "India",
      thumbnail: "/OwlWebTeam/14.webp",
      department: "Development Team",
    },
    {
      id: 15,
      name: "Ishaan",
      surname: "Gupta",
      position: "Back End Developer",
      desc: "Ishaan ensures our server-side logic is robust and efficient.",
      country: "India",
      thumbnail: "/OwlWebTeam/15.webp",
      department: "Development Team",
    },
    {
      id: 16,
      name: "Michał",
      surname: "Nowak",
      position: "Junior Developer",
      desc: "Michał assists with coding tasks, always eager to learn and grow.",
      country: "Poland",
      thumbnail: "/OwlWebTeam/16.webp",
      department: "Development Team",
    },
    {
      id: 17,
      name: "Yaroslav",
      surname: "Petrenko",
      position: "Junior Developer",
      desc: "Yaroslav supports our development team with coding and debugging.",
      country: "Ukraine",
      thumbnail: "/OwlWebTeam/17.webp",
      department: "Development Team",
    },
    {
      id: 18,
      name: "Tamuna",
      surname: "Kobakhidze",
      position: "QA Engineer",
      desc: "Tamuna ensures our software is bug-free and user-friendly.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/18.webp",
      department: "Development Team",
    },
    {
      id: 19,
      name: "Sandrine",
      surname: "de Vries",
      position: "QA Tester",
      desc: "Sandrine tests our software thoroughly to ensure quality.",
      country: "Netherlands",
      thumbnail: "/OwlWebTeam/19.webp",
      department: "Development Team",
    },
    {
      id: 20,
      name: "Amiran",
      surname: "Dvali",
      position: "DevOps Engineer",
      desc: "Amiran manages our infrastructure, ensuring smooth deployment processes.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/20.webp",
      department: "Development Team",
    },
    {
      id: 21,
      name: "Mateo",
      surname: "van Dijk",
      position: "System Administrator",
      desc: "Mateo keeps our systems running efficiently and securely.",
      country: "Netherlands",
      thumbnail: "/OwlWebTeam/21.webp",
      department: "Development Team",
    },
    {
      id: 22,
      name: "Riley",
      surname: "Kim",
      position: "Marketing Specialist",
      desc: "Riley strategizes our marketing campaigns to reach the right audience.",
      country: "United States",
      thumbnail: "/OwlWebTeam/22.webp",
      department: "Marketing Team",
    },
    {
      id: 23,
      name: "Salome",
      surname: "Lomidze",
      position: "Digital Marketing Manager",
      desc: "Salome leads our digital marketing efforts, ensuring online visibility.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/23.webp",
      department: "Marketing Team",
    },
    {
      id: 24,
      name: "Anastasia",
      surname: "Kuznetsova",
      position: "Social Media Manager",
      desc: "Anastasia manages our social media presence, engaging with our audience.",
      country: "Ukraine",
      thumbnail: "/OwlWebTeam/24.webp",
      department: "Marketing Team",
    },
    {
      id: 25,
      name: "Maia",
      surname: "Ebralidze",
      position: "Content Strategist",
      desc: "Maia develops content strategies that captivate and inform.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/25.webp",
      department: "Marketing Team",
    },
    {
      id: 26,
      name: "Piotr",
      surname: "Zielinski",
      position: "SEO Specialist",
      desc: "Piotr optimizes our websites to rank higher in search engines.",
      country: "Poland",
      thumbnail: "/OwlWebTeam/26.webp",
      department: "Marketing Team",
    },
    {
      id: 27,
      name: "Aakash",
      surname: "Sharma",
      position: "PPC Specialist",
      desc: "Aakash manages our pay-per-click advertising campaigns for maximum ROI.",
      country: "India",
      thumbnail: "/OwlWebTeam/27.webp",
      department: "Marketing Team",
    },
    {
      id: 28,
      name: "Sandro",
      surname: "Kobalia",
      position: "Project Manager",
      desc: "Sandro coordinates projects to keep everything on track.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/28.webp",
      department: "Project Management Team",
    },
    {
      id: 29,
      name: "Kateryna",
      surname: "Pavlenko",
      position: "Assistant Project Manager",
      desc: "Kateryna assists with project management, ensuring everything runs smoothly.",
      country: "Ukraine",
      thumbnail: "/OwlWebTeam/29.webp",
      department: "Project Management Team",
    },
    {
      id: 30,
      name: "Sophia",
      surname: "Dekanoidze",
      position: "Customer Support Lead",
      desc: "Sophia leads our support team, ensuring customer satisfaction.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/30.webp",
      department: "Support Team",
    },
    {
      id: 31,
      name: "Manana",
      surname: "Kiknadze",
      position: "Customer Support Representative",
      desc: "Manana provides excellent support to our customers.",
      country: "Georgia",
      thumbnail: "/OwlWebTeam/31.webp",
      department: "Support Team",
    },
  ];


  export const logoCarousel = [
  {
    id: 1,
    name: 'AWS',
  },
  {
    id: 2,
    name: 'BlackmagicDesign',
  },
  {
    id: 3,
    name: 'Cloudflare',
  },
  {
    id: 4,
    name: 'CookieYes',
  },
  {
    id: 5,
    name: 'Elementor',
  },
  {
    id: 6,
    name: 'Figma',
  },
  {
    id: 7,
    name: 'GoogleAds',
  },
  {
    id: 8,
    name: 'Instapage',
  },
  {
    id: 9,
    name: 'Logo_Google_Analytics',
  },
  {
    id: 10,
    name: 'Mailchimp',
  },
  {
    id: 11,
    name: 'Meta',
  },
  {
    id: 12,
    name: 'Microsoft',
  },
  {
    id: 13,
    name: 'monday.com',
  },
  {
    id: 14,
    name: 'Next.js',
  },
  {
    id: 15,
    name: 'Semrush',
  },
  {
    id: 16,
    name: 'Slack',
  },
  {
    id: 17,
    name: 'Tiktok',
  },
  {
    id: 18,
    name: 'TransIP',
  },
  {
    id: 19,
    name: 'Youtube',
  },
  {
    id: 20,
    name: 'Zapier',
  },
  {
    id: 21,
    name: 'ZOHO',
  },
  {
    id: 22,
    name: 'github',
  },
  {
    id: 23,
    name: 'tailwindcss',
  },
  ];
  