import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Salum Sembe",
  initials: "SS",
  location: "Morogoro, Tanzania, GMT",
  locationLink: "https://maps.app.goo.gl/3Spy2b93zDscuJ5u6",
  about:
    "Detail-oriented Software Developer dedicated to building high-quality products.",
  summary:
    "Proficient in Django and Python for backend and API development, coupled with expertise in Flutter for frontend, I specialize in crafting captivating mobile applications. With a focus on seamless user experiences, I also excel in UX design, ensuring intuitive navigation and engaging interfaces. Passionate about creating innovative solutions, I thrive in collaborative environments, leveraging my skills to deliver impactful mobile experiences that delight users.",
  avatarUrl: "https://avatars.githubusercontent.com/u/102725584?s=400&u=210d51fd5c004f9c2193d6e9c6f5c2078960e38c&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "salumrashidjr@gmail.com",
    tel: "+255 616 107 670",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sembesalum",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salum-rashidjr/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Salum_SembeJr?t=EG4GctPa-3PZ9Mi9beffMg&s=09",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sokoine University of Agriculture",
      degree: "Diploma in Information and Technology",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "LevelsProTech",
      link: "https://linkedin.com/company/levelsprotech/",
      badges: ["Remote"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "We develop innovative software solutions to streamline and automate daily tasks, enhancing productivity and simplifying routines.",
    },
    {
      company: "Geoclimatz",
      link: "https://www.linkedin.com/company/geoclimatz/",
      badges: ["Remote"],
      title: "System Administrator",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "Infrastructure Management: Overseeing and maintaining servers, databases, and network systems to ensure reliable data storage, processing, and accessibility.",
    },
    
  ],
  skills: [
    "Flutter",
    "Django",
    "Python",
    "A RESTful API",
    "Dart",
    "Javascript",
    "MySQL",
    "AXML, ACSS, JSON",
    "HTML5, CSS",
    "API Testing",
    "Firebase",
  ],
  projects: [
    {
      title: "TU Chat App",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
        
      ],
      description:
        "I developed an app tailored for university students, enabling them to purchase past exam papers specific to their courses through various subscription packages. In addition to this core feature, the app also includes e-commerce functionality, a chatbot for assistance, real-time chatting capabilities, and dedicated sections for events and blogs, providing a comprehensive platform for students to enhance their academic experience.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://play.google.com/store/apps/details?id=com.tuchat.app&pcampaignid=web_share",
      },
    },
    {
      title: "SmartSchool App",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
        
      ],
      description:
        "Developed an app for LevelsProTech that helps teachers automate their daily tasks, such as planning results, scheduling timetables, managing tasks, and merging multiple results from Excel files.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "#",
      },
    },
    {
      title: "Cheka Plus Mini App",
      techStack: [
        "JavaScript",
        "AXML",
        "ACSS",
        "JSON",
        "MySQL",
        "API Testing",
        
      ],
      description: "I have collaborated with other developers to build a mobile app that runs as a mini program within the Vodacom main application for booking tickets and streaming comedy shows and events within the app, by subscribing to different packages.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "#",
      },
    },
    {
      title: "Victory Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://66c2e8f00e2299a21dc91f80--nimble-belekoy-793055.netlify.app/",
      },
    },
    {
      title: "LevelsProTech Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://levelsprotech-website.vercel.app/",
      },
    },
    {
      title: "GeoclimaTz Website",
      techStack: ["HTML", "CSS", "JavaScript", "EmailJs"],
      description:
        "I build and deploy websites online for customers. I also utilize Django for backend development to create robust and dynamic web applications",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "#",
      },
    },
    
  ],
} as const;
