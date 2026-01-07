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
      company: "Swahilies Company",
      link: "https://swahilies.dev/",
      badges: ["Remote"],
      title: "Mobile App Developer",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description:
        "Swahilies Company Limited is a Tanzanian technology firm with deep expertise in building scalable fintech and digital banking solutions tailored for African markets. We develop end to end platforms that empower financial institutions to digitise operations, improve efficiency, and expand financial access.",
    },
    {
      company: "BinaryFlow Tech",
      link: "binaryflowtech.com",
      badges: ["Remote"],
      title: "Software Developer",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description:
        "A forward-thinking company dedicated to developing innovative applications and website solutions for businesses and organizations, thereby enabling them to excel in the digital landscape.",
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
    "NextJs",
  ],
  projects: [
    {
      title: "IBG Mining",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Python",
      ],
      description:
        "A comprehensive web platform for mining operations and management. Features include real-time data tracking, resource management, and operational analytics.",
      logo: AmbitLogo,
      link: {
        label: "ibgmining.com",
        href: "https://ibgmining.com/",
      },
    },
    {
      title: "Swahilies",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Python",
      ],
      description:
        "Swahilies Company Limited is a Tanzanian technology firm with deep expertise in building scalable fintech and digital banking solutions tailored for African markets. We develop end to end platforms that empower financial institutions to digitise operations, improve efficiency, and expand financial access.",
      logo: JarockiMeLogo,
      link: {
        label: "swahilies.dev",
        href: "https://swahilies.dev/",
      },
    },
    {
      title: "Geoclimatz",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Python",
      ],
      description:
        "An environmental and climate data platform providing real-time weather information, climate analytics, and environmental monitoring tools.",
      logo: Minimal,
      link: {
        label: "geoclimatz.org",
        href: "https://geoclimatz.org/",
      },
    },
    {
      title: "TU Chat",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
      ],
      description:
        "A mobile messaging application designed for seamless communication. Features include real-time messaging, file sharing, group chats, and multimedia support.",
      logo: ParabolLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.tuchat.app&pcampaignid=web_share",
      },
    },
    {
      title: "Mkononi Hardware",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
      ],
      description:
        "A mobile e-commerce application for hardware and construction materials. Features include product catalog, shopping cart, order management, and delivery tracking.",
      logo: JojoMobileLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.mkononihardwareapp.app&pcampaignid=web_share",
      },
    },
    {
      title: "BinaryFlow",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Python",
      ],
      description:
        "A technology solutions platform offering software development services, digital transformation, and IT consulting. Features include service portfolio, case studies, and client resources.",
      logo: ClevertechLogo,
      link: {
        label: "binaryflowtech.com",
        href: "https://binaryflowtech.com/",
      },
    },
    {
      title: "Montana Pharmacy",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
      ],
      description:
        "A mobile healthcare application for pharmacy services. Features include medicine ordering, prescription management, health tips, and pharmacy locator.",
      logo: TastyCloudLogo,
      link: {
        label: "play.google.com",
        href: "https://play.google.com/store/apps/details?id=com.montanapharmacy.pharmacy&pcampaignid=web_share",
      },
    },
    {
      title: "Darasa Langu App",
      techStack: [
        "Flutter (Dart)",
        "Django",
        "REST Framework",
        "MySQL",
      ],
      description:
        "A comprehensive school management mobile application for teachers and students. Features include class management, attendance tracking, grade management, lesson plans, timetable, student registration, and subscription plans. Designed to modernize education in Tanzania.",
      logo: EvercastLogo,
      link: {
        label: "smartschool",
        href: "smartschool/landpage.html",
      },
    },
  ],
} as const;
