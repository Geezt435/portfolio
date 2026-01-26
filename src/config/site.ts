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
    posts: "Posts",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "Technician | Programmer | Former Chief Technology Officer",
    name: "Daud Elang Nugraha",
    intro: "I am a tech specialist with a passion for development and practical solutions. Welcome to my portfolio!",
    avatar: "/image/cleanavatar.png",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
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
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
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
        value: "San Francisco, CA",
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
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },

  proficiencies: {
    title: "My Proficiencies",
    skills: [
      { name: "React", index: 1, percentage: 95, themeColor: "#559caf"},
      { name: "JavaScript", index: 2, percentage: 90, themeColor: "#625a23"},
      { name: "TypeScript", index: 3, percentage: 88, themeColor: "#518dcd"},
      { name: "Vue.js", index: 4, percentage: 85, themeColor: "#4FC08D"},
      { name: "Node.js", index: 5, percentage: 92, themeColor: "#339933"},
      { name: "Python", index: 6, percentage: 80, themeColor: "#306998"},
      { name: "Django", index: 7, percentage: 75, themeColor: "#22815c"},
      { name: "HTML5", index: 8, percentage: 98, themeColor: "#E34F26"},
      { name: "CSS3", index: 9, percentage: 95, themeColor: "#1572B6"},
      { name: "SQL", index: 10, percentage: 85, themeColor: "#c75e8b"},
      { name: "Git", index: 11, percentage: 95, themeColor: "#F05032"},
      { name: "CSS", index: 12, percentage: 95, themeColor: "#3c5ee8"},
      { name: "Flutter", index: 13, percentage: 70, themeColor: "#02569B"},
      { name: "C++", index: 14, percentage: 75, themeColor: "#00599C"},
      { name: "C#", index: 15, percentage: 90, themeColor: "#239120"},
      { name: "Java", index: 16, percentage: 75, themeColor: "#007396"},
      { name: "Kotlin", index: 17, percentage: 70, themeColor: "#0095D5"},
      { name: "PHP", index: 18, percentage: 95, themeColor: "#777BB4"},
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
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
};

