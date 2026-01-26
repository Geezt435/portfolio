import { title } from "framer-motion/client";

// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Main Portfolio",
  title: "Main Portfolio",
  owner: "Daud Elang Nugraha",
  description: "Portfolio of Daud Elang Nugraha - Technician, Programmer, Former CTO",
  
  // Navigation
  navigation: {
    home: "Home",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "Technician | Programmer | Former Chief Technology Officer",
    name: "Daud Elang Nugraha",
    intro: "I am a tech specialist with a passion for development and practical solutions. Welcome to my portfolio!",
    avatar: "/image/cleanavatar.png",
    buttons: [
      { text: "My Profile", url: "https://www.linkedin.com/in/geeztjeez/" },
      { text: "Contact Me", url: "/contact" },
    ],
    socialLinks: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/GeeztJ" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/geeztjeez/" },
        { name: "Google Skills", icon: "/svg/google_cloud-icon.svg", url: "https://www.skills.google/public_profiles/048afe87-ad72-4825-bc00-207beb32b7a7" },
        { name: "Dicoding", icon: "/svg/dicoding.svg", url: "https://www.dicoding.com/users/geeztjeez/academies" },
        { name: "Instagram", icon: "/svg/instagram.svg", url: "https://www.instagram.com/daudelangnugrahatelkom/" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Geezt435" },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    text: "Greetings! I'm Daud Elang Nugraha, an experienced modder, web programmer and app developer, with a passion for technology and innovation. With a strong background in creating custom modifications and developing web applications, I thrive on turning ideas into reality. My journey in the tech world has equipped me with a diverse skill set, allowing me to tackle challenges with creativity and precision. Whether it's enhancing user experiences or building robust solutions, I'm dedicated to pushing the boundaries of what's possible in the digital realm.",
  },

  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities!",
    info: {
      email: {
        label: "Email",
        value: "daudelangnugraha@gmail.com",
        link: "mailto:daudelangnugraha@gmail.com",
      },
      phone: {
        label: "Phone",
        value: "+62 813-5140-1064",
        link: "tel:+62 813-5140-1064",
      },
      location: {
        label: "Location",
        value: "Panti Asuhan Little Sunshine, Jl A Yani, Ruko Cendrawasih Center No.18A, Temindung Permai, Kec. Sungai Pinang, Kota Samarinda,  Kaltim. 75119",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/GeeztJ" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/geeztjeez/" },
        { name: "Google Skills", icon: "/svg/google_cloud-icon.svg", url: "https://www.skills.google/public_profiles/048afe87-ad72-4825-bc00-207beb32b7a7" },
        { name: "Dicoding", icon: "/svg/dicoding.svg", url: "https://www.dicoding.com/users/geeztjeez/academies" },
        { name: "Instagram", icon: "/svg/instagram.svg", url: "https://www.instagram.com/daudelangnugrahatelkom/" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Geezt435" },
        { name: "Discord", icon: "/svg/discord.svg", url: "https://discord.gg/RUM5pKUe9K" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
  },

  // Proficiencies Section
  proficiencies: {
    title: "My Proficiencies",
    skills: [
      { name: "React", percentage: 95, themeColor: "#559caf"},
      { name: "JavaScript", percentage: 90, themeColor: "#625a23"},
      { name: "TypeScript", percentage: 88, themeColor: "#518dcd"},
      { name: "Vue.js", percentage: 85, themeColor: "#4FC08D"},
      { name: "Node.js", percentage: 90, themeColor: "#339933"},
      { name: "Python", percentage: 80, themeColor: "#306998"},
      { name: "Django", percentage: 75, themeColor: "#22815c"},
      { name: "HTML5", percentage: 90, themeColor: "#E34F26"},
      { name: "CSS3", percentage: 90, themeColor: "#1572B6"},
      { name: "SQL", percentage: 85, themeColor: "#c75e8b"},
      { name: "Git", percentage: 95, themeColor: "#F05032"},
      { name: "CSS", percentage: 100, themeColor: "#3c5ee8"},
      { name: "Flutter", percentage: 70, themeColor: "#02569B"},
      { name: "C++", percentage: 75, themeColor: "#00599C"},
      { name: "C#", percentage: 100, themeColor: "#239120"},
      { name: "Java", percentage: 75, themeColor: "#007396"},
      { name: "Kotlin", percentage: 70, themeColor: "#0095D5"},
      { name: "PHP", percentage: 100, themeColor: "#777BB4"},
    ],
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Daud Elang Nugraha. All rights reserved.`,
    links: [
      { text: "Other Bio", url: "https://geeztjee.bio.link/" },
      { text: "My Github", url: "https://github.com/Geezt435" },
    ],
  },
};

