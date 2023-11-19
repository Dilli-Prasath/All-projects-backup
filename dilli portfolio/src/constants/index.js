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
  shop,
  portfolio,
  travel,
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

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
    title: "Front-End Developer",
    // company_name: "Starbucks",
    company_name: "TEN",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2020 - Nov 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Smart Intern",
    // company_name: "Tesla",
    company_name: "IBM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - Dec 2022",
    points: [
      "Recent Covid-19 Pandemic has raised alarms over one of the most overlooked areas to focus: Healthcare",
     "Management. While healthcare management has various use cases for using data science, patient length of stay is one critical parameter to observe and predict if one wants to improve the efficiency of the healthcare management in a hospital.",      
      "This parameter helps hospitals to identify patients of high LOS-risk (patients who will stay longer) at the time of admission. Once identified, patients with high LOS risk can have their treatment plan optimized to minimize LOS and lower the chance of staff/visitor infection. Also, prior knowledge of LOS can aid in logistics such as room and bed allocation planning.",
      "Suppose you have been hired as Data Scientist of Health Man – a not for profit organization dedicated to manage the functioning of Hospitals in a professional and optimal manner.Recent Covid-19 Pandemic has raised alarms over one of the most overlooked areas to focus: Healthcare Management. While healthcare management has various use cases for using data science, patient length of stay is one critical parameter to observe and predict if one wants to improve the efficiency of the healthcare management in a hospital. This parameter helps hospitals to identify patients of high LOS-risk (patients who will stay longer) at the time of admission. Once identified, patients with high LOS risk can have their treatment plan optimized to minimize LOS and lower the chance of staff/visitor infection. Also, prior knowledge of LOS can aid in logistics such as room and bed allocation planning. Suppose you have been hired as Data Scientist of Health Man – a not for profit organization dedicated to manage the functioning of Hospitals in a professional and optimal manner.",
      "Skills: React.js · Javascript · IBM Cognos Analytics · IBM Cloud · IBM Db2 · Kaggle · Jirasoftware · Python (Programming Language)",
    ],
  },
  {
    title: "SDE-Intern",
    // company_name: "shopify",
    company_name: "IBM",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Engage in the creation and continuous enhancement of web applications, leveraging expertise in React.js and associated tools.",
      "Collaborate seamlessly with multifaceted teams encompassing design, product management, and development to drive the realization of top-tier products.",
      "Exhibit mastery in implementing responsive design paradigms, guaranteeing optimal user experiences across diverse devices and platforms.",
      "Ensure meticulous compatibility of applications across various web browsers, warranting a consistent and glitch-free performance.",
      "Participate actively in code review processes, furnishing valuable insights to fellow developers and upholding the integrity of the codebase.",
      "Skills: React.js · Javascript · Node.js · Express.js · CSS3 · TailwindCSS · Three.js · MySQL  · MongoDB · Google Firebase DB",
    ],
  },
  {
    title: "College Project",
    // company_name: "meta",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Undertake the design, development, and refinement of web applications for college projects, utilizing proficiency in frontend technologies including React.js.",
      "Interact effectively with clients from various academic backgrounds, comprehending project requirements and aligning solutions to their vision.",
      "Execute intuitive user interface and experience design, ensuring seamless navigation and visual appeal for diverse educational projects.",
      "Validate and optimize applications for compatibility across multiple devices and screen sizes, delivering consistent performance.",
      "Maintain code quality through regular review processes, offering constructive feedback to peers and upholding project standards.",
      "Skills: React.js · Javascript · Node.js · Express.js · CSS3 · TailwindCSS · Three.js · MySQL  · MongoDB · Google Firebase DB",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "In a National Level UI Development Event conducted by JNN Institute of Technology our team Won 3rd place for React UI Design",
    name: "JNN",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image: "https://i.pinimg.com/564x/93/55/34/935534a0d50683b9db96e8608e0b7d66.jpg",
  },
  {
    testimonial:
      "Madras Institue of Technology (MIT) conducted SAMHITA 20 a National Level Technical Festival held on Feb 1st 2020 organised by Information Technology won 9th place for Food Application",
    name: "MIT",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
    image: "https://i.pinimg.com/564x/68/f4/a0/68f4a0d09c4111471f3fd768d5d56312.jpg",
  },
  {
    testimonial:
      "Accenture | Forge I have done a Certificate for Developer Program",
    name: "Accenture",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: "https://i.pinimg.com/564x/ed/76/0c/ed760cdabc8f538071b15cc22abb4651.jpg",
  },
];

const projects = [
  {
    name: "Enhance Crypto",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Meta Mask",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dilli-Prasath",
  },
  {
    name: "Duntt Food",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Dilli-Prasath",
  },
  {
    name: "Book Hub",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "openbook library api",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dilli-Prasath",
  },

  {
    name: "E-commerce Shop",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Dilli-Prasath",
  },
  {
    name: "Travel Application",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Dilli-Prasath",
  },
    {
    name: "Portfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS - framerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Dilli-Prasath",
  },
];

export { services, technologies, experiences, testimonials, projects };
