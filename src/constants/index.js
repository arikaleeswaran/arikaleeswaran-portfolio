import skycast from "../assets/projects/skycast.png";
import task from "../assets/projects/task.png";
import project3 from "../assets/projects/project-3.png";
import restaurant from "../assets/projects/restaurant.jpg";
import invoice from "../assets/projects/invoice.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js, MySQL and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am currently pursuing my undergraduate degree in CSE(Artificial Intelligence and Machine Learning) at CIT, Chennai. As a passionate learner, I have developed strong skills as a full-stack developer, working with technologies such as React.js, Node.js, Express.js, MySQL, and PostgreSQL. Additionally, I have experience in programming with Java, Python, and C programing. I am always eager to explore and master new technologies.`;

export const EXPERIENCES = [
  {
    year: "MAY 2024 - Present",
    role: "Networking Intern",
    company: "CISCO Networking Academy",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Networking", "Packet Tracer"],
  },
  {
    year: "NOV 2023 - DEC 2023",
    role: "Web Development Intern",
    company: "Prodigy Info Tech",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "API","Git","GitHub","React.js"],
  },
  {
    year: "NOV 2023 - DEC 2023",
    role: "UI/UX Design Intern",
    company: "CodSoft",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Figma","Prototyping"],
  },
  {
    year: " MAY 2023 - JUN 2023",
    role: "Web Development Intern",
    company: "Mapos IT Services Pvt. Ltd.",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML","CSS","Pandas","Numpy","WireFrame"],
  },
];

export const PROJECTS = [
  {
    title: "DIGITAL INVOICE CREATOR",
    image: invoice,
    link:"https://invoicegenerator-tawny.vercel.app/",
    description:
      "Implemented features for unique invoice/customer numbers and dynamic item addition. Produced detailed PDF invoices with totals and payment information. Enhanced UX with intuitive design and seamless backend integration for efficient invoicing.",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "JavaScript","PostgreSQL","Supabase"],
  },
  {
    title: "Task Management App",
    image: task,
    link:"https://task-management-system-olive.vercel.app/",
    description:
      "An application for managing tasks and projects, with features such as task creation, completion status and delete the task.",
    technologies: ["React", "CSS", "Express.js", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:"https://arikaleeswaran.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind CSS", "Bootstrap"],
  },
  {
    title: "SKYCAST",
    image: skycast,
    link:"https://arikaleeswaran.github.io/Weather-Application/",
    description:
      "A fully functional weather forcasting website. Enhanced user accessibility and experience by implementing an intuitive search functionality and a 5-day weather forecast feature.",
    technologies: ["HTML", "CSS", "API", "JavaScript"],
  },
  {
    title: "Restaurant Menu Application Prototype",
    image: restaurant,
    link:"https://www.figma.com/proto/cUsSJrJoPBfVeHPTGcrI6A/Restaurant-Menu?page-id=0%3A1&type=design&node-id=1-2&viewport=596%2C682%2C0.15&t=WMY11BMJKoRAmx5n-1&scaling=scale-down&starting-point-node-id=1%3A2",
    description:
      "Developed a restaurant menu prototype in Figma with an engaging and professional user interface.",
    technologies: ["Figma"],
  },
];

export const CONTACT = {
  address: "Thirupathur, TamilNadu, India-635 710",
  phoneNo: "+91 9965945105 ",
  email: "g.arikaleeswaran7@gmail.com",
};
