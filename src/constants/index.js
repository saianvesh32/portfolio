import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  import chatApp from "../assets/chatapp.png";
  import foodMonito from "../assets/foodmonito.png";
  import funLearn from "../assets/funlearn.png";
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Honorable Mention - Hack4SDG",
      company_name: "AIESEC, IIT Hyderabad",
      icon: funLearn, // Replace with an appropriate icon
      iconBg: "#383E56",
      date: "October 2024",
      points: [
        "Recognized for developing an AI-powered educational platform that redefines the learning experience.",
        "Created an interactive prototype allowing students to select characters with distinct voices to guide lessons.",
        "Integrated AI for personalization, gamification, and engagement to make learning conversational and impactful.",
        "Stood out for creativity and focus on enhancing student-centric education."
      ],
    },
    {
      title: "2nd Place - EdTech Domain",
      company_name: "Datanyx Hackathon, AWS Cloud Club MJCET & IEEE SMC MJCET",
      icon: foodMonito, // Replace with an appropriate icon
      iconBg: "#E6DEDD",
      date: "November 23-24, 2024",
      points: [
        "Developed FoodSense App, an innovative 'Food Ingredient Analysis and Health Awareness System'.",
        "Featured Daily Nutrient Progress Tracking to monitor users' intake.",
        "Integrated a Random Forest model for Food Alternative Prediction in Next.js to suggest healthier substitutes.",
        "Implemented Personalized Diet Recommendations using a CatBoost model for better nutrition awareness."
      ],
    },
  ];
  

  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FunLearn",
      description:
        "Interactive learning platform featuring a cartoon guide for personalized and engaging educational experiences. Built with Next.js, Tailwind CSS, Prisma, and PostgreSQL, it integrates OpenCV and TensorFlow for gesture-based quizzes and AI-driven, real-time doubt resolution using OpenAI and Eleven Labs APIs. Hosted on Vercel/Netlify for seamless access.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: funLearn,
      source_code_link: "https://github.com/",
    },
    {
      name: "chatApp",
      description:
        "A real-time chat application developed using the MERN stack, enabling instant messaging between users. Integrated with Socket.IO to facilitate seamless real-time communication and ensure low-latency message delivery. The platform supports user authentication, message history storage using MongoDB, and a responsive UI built with React for a smooth user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/",
    },
    {
      name: "FoodSense App",
      description:
        "Machine learning-powered application promoting healthier eating habits. Features include Daily Nutrient Progress Tracking for diet monitoring and a Random Forest model with Next.js for Food Alternative Prediction, suggesting healthier ingredient substitutes. Additionally, a CatBoost model provides personalized diet recommendations tailored to user needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: foodMonito,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };