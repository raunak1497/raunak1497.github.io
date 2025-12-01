/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raunak Singh",
  title: "Hi all, I'm Raunak",
  subTitle: emoji(
    "I’m a full-stack engineer passionate about building scalable backend systems and intuitive, high-performance interfaces. I enjoy designing distributed architectures and creating products that solve real problems end-to-end."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1dfTXQyPIpSPS0IISQ_RHnN9Rm1nsF3_GXPpsuYgiMB0/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/raunak1497",
  linkedin: "https://www.linkedin.com/in/raunaksingh1497/",
  gmail: "raunak1497@gmail.com",
  gitlab: "https://gitlab.com/raunak1497",
  facebook: "https://www.facebook.com/profile.php?id=100010274268438",
  medium: "https://medium.com/@raunaksingh1497",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack Software Engineer Focused on Scalable Systems & Exceptional User Experiences",
  skills: [
    emoji(
      "⚡ Build high-performance, responsive user interfaces using React, Next.js, and TypeScript"
    ),
    emoji(
      "⚡ Design and develop scalable backend services, APIs, and distributed systems"
    ),
    emoji(
      "⚡ Implement real-time features, data pipelines, and integrations across cloud platforms (AWS,GCP)"
    ),
    emoji(
      "⚡ Optimize application performance, reliability, and end-to-end user experience"
    ),
    emoji(
      "⚡ Collaborate across product, design, and engineering to ship impactful features quickly"
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Chicago",
      logo: require("./assets/images/UIClogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2024 - December 2025",
      desc: "My academic focus spans distributed systems, scalable backend architecture, database implementations, concurrent programming, and designing intuitive human-centered user interfaces.",
      descBullets: [
        "Courses: Artificial Intelligence, Distributed Systems in Cloud Computing, Advanced Database Systems, Concurrent Programming, Human Computer Interaction, Machine Learning, and Data Science"
      ]
    },
    {
      schoolName: "National Institute of Technology Calicut",
      logo: require("./assets/images/NITClogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2017 - May 2021",
      desc: `My bachelor’s project focused on Blockchain and Computer Security, where I contributed under Dr. Vinod Pathari. Leveraging the Ethereum blockchain, I explored secure implementations for decentralized applications and exploring various aspects of blockchain technology and its security applications.`,
      descBullets: [
        "Relevant Coursework: Data Structures and Algorithms, Operating System(OS), Database Management System (DBMS), Application Security, Computer  Graphics, Compiler Design, Computational Geometry, Computer Networks"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack:
        "Programming Languages : JavaScript, TypeScript, Java, Python, C++",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend : React, Next.js, TypeScript, Tailwind CSS",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend : Node.js, Express, Spring Boot, gRPC",
      progressPercentage: "85%"
    },
    {
      Stack: "Databases : PostgreSQL, MySQL, MongoDB, Redis ",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps (AWS, GCP, Docker, CI/CD)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "CalAmp",
      company: "Software Engineer Intern",
      companylogo: require("./assets/images/calamp.png"),
      date: "June 2025 – Aug 2025",
      desc: "As a Front-end engineer intern at CalAmp, I worked on enhancing the ION real-time fleet management dashboard, focusing on performance optimization, feature development, and code quality improvements. My contributions include revamping legacy components using Next.js, TypeScript, and React to deliver a faster, more intuitive user experience, optimizing live map rendering for real-time fleet tracking, and boosting test coverage with Jest to ensure reliability and maintainability."
    },
    {
      role: "Senior Software Engineer",
      company: "Deutsche Bank",
      companylogo: require("./assets/images/db.png"),
      date: "Jul 2021 – Dec 2023",
      desc: "At Deutsche Bank, I worked as a full-stack engineer on the core team building a real-time trading platform. I architected the Micro-Frontend ecosystem using Webpack Module Federation, enabling independently deployable React apps with shared authentication and live WebSocket-powered data. Alongside this, I contributed across 20+ Spring Boot microservices improving API design, performance, and security to deliver a scalable, high-performance platform that enhanced developer velocity and significantly improved the experience for users."
    },
    {
      role: "Software Engineer Intern",
      company: "Cisco",
      companylogo: require("./assets/images/cisco.png"),
      date: "Jun 2020 – July 2020",
      desc: "As a software Engineer Intern , I built an internal tool to track task status across teams a collaborative task dashboard developed using React/Next.js and a Node.js backend. I implemented JWT authentication, role-based access control, and drag-and-drop workflows, delivering a secure, accessible, and optimized UI that streamlined team productivity and task visibility."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Self learned projects",
  projects: [
    {
      image: require("./assets/images/llm.jpeg"),
      projectName: "Distributed Large LanguageModel",
      projectDesc:
        "Designed and developed a large language model (LLM) from scratch, leveraging distributed cloud computations to optimize data processing, vector embeddings, scalability, and performance. Implemented a cloud-based Map/Reduce architecture on AWS EMR and deployed generative LLM systems using Amazon Bedrock, Lambda functions, and Spark for efficient neural network training. Utilized Scala with the ScalaTest framework to create testable, scalable applications, adhering to functional programming principles and best practices in cloud computing and parallelism.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/distributed-LLM"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chicago-rentals.png"),
      projectName: "Chicago Rentals",
      projectDesc:
        "Developed a high-performance rental platform using React, Next.js, and TypeScript with SSR/SSG for optimized user experience. Built dynamic property search, booking workflows, and responsive UI components. Designed an event-driven backend using Kafka and modern system design principles for scalability.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/Chicago-rentals"
        }
      ]
    },
    {
      image: require("./assets/images/authetify.png"),
      projectName: "Authetify",
      projectDesc:
        "Developed a lightweight, user-friendly decentralized application (Dapp) using Flutter to monitor and track counterfeit food products across the supply chain. Integrated RFID technology to streamline scanning processes and detect counterfeit products at various stages of the supply chain, ensuring greater transparency and product authenticity.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/Authetify/tree/master"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/expos.png"),
      projectName: "EXPOS",
      projectDesc:
        "Designed and implemented a miniature operating system from scratch using Expl, incorporating fundamental OS features and components. Developed critical modules such as I/O management, scheduling, memory management, and linking, enabling efficient and reliable system functionality. ",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/EXPOS_759"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const minorProjects = {
  title: "Minor Projects",
  subtitle: "Additional full stack projects",
  projects: [
    {
      projectName: "Task Lifecycle Management Tool",
      projectDesc:
        "Built a full workflow automation system using Next.js, NestJS, and TypeScript. Implemented drag-and-drop UI, modular backend architecture, RBAC authentication, audit logs, and Webpack-based build pipelines. Designed REST APIs and end-to-end CI test coverage using Jest.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/Secure-Task-Manager"
        }
      ]
    },
    {
      projectName: "COVID Tracker",
      projectDesc:
        "Developed a Spring Boot backend service with REST APIs that aggregate global COVID-19 statistics, vaccination data, and region-based case trends. Implemented microservices-based architecture with clean OOP design and service-layer abstraction.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/Covid19-tracker"
        }
      ]
    },
    {
      projectName: "TourBus Manager – Concurrent Ticketing System",
      projectDesc:
        "Built a highly concurrent tourist bus ticketing system in Java with thread-safe operations for ticket boarding, transfers, and validation across multiple buses. Implemented custom lock mechanisms, lock-free data structures, and asynchronous task processing to guarantee linearizability, avoid deadlocks, and ensure correctness under multi-threaded workloads.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/tourBus-ticket-manager" // replace with actual link
        }
      ]
    }
  ],
  display: true
};

const aiMlProjects = {
  title: "AI & Machine Learning Projects",
  subtitle: "Projects leveraging LLMs, Deep Learning, NLP & Data Intelligence",
  projects: [
    {
      projectName: "Medibot – Intelligent Medical Chatbot",
      projectDesc:
        "Built a healthcare-focused AI assistant using LLMs, LangChain, Mistral, and FAISS for vector search. Implemented conversational memory, PDF/query embeddings, and real-time retrieval-augmented responses for accurate healthcare assistance.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/medi-bot"
        }
      ]
    },
    {
      projectName: "SOCIAL MEDIA BUZZ",
      projectDesc:
        "Performed end-to-end sentiment analysis and influencer detection on social media events using NLP techniques. Built classification and regression models to analyze trends, detect patterns, and forecast engagement metrics.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/Lakuna/CS-412-Final-Project"
        }
      ]
    },
    {
      projectName: "MNIST Classification",
      projectDesc:
        "Developed a high-accuracy Convolutional Neural Network (CNN) for MNIST digit classification. Compared multiple neural architectures and optimized feature extraction layers to achieve strong performance benchmarks.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/raunak1497/MNIST-Classification.git"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Associate Cloud Engineer",
      subtitle: "Google Cloud certified.",
      image: require("./assets/images/googleCloud.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Verify Badge",
          url: "https://www.credly.com/badges/daa59cab-2e41-4526-a17f-bc1fd7f7fcfc/public_url"
        }
      ]
    },
    {
      title: "IIT JEE 2017",
      subtitle:
        "Qualified the IIT JEE main and advanced with a 99.7 percentile among 1.3 million candidates",
      image: require("./assets/images/IIT.png"),
      imageAlt: "IIT JEE",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+1)-312-358-7167",
  email_address: "raunak1497@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  minorProjects,
  aiMlProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
