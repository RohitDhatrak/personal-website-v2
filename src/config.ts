import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rohitdhatrak.com", 
  author: "Rohit Dhatrak",
  profile: "https://rohitdhatrak.com",
  desc: "I'm Rohit Dhatrak, a software developer with over two years of experience, I focus on developing reliable and efficient backend systems. My expertise lies in Golang, SQL (PostgreSQL), and Redis, allowing me to design optimized data-driven systems.Beyond backend development, I am proficient in cloud technologies (AWS) and containerization (Docker). Additionally, I have full-stack development experience using Node.js, JavaScript, and React.js, enabling me to create  comprehensive solutions that integrate robust backend architecture with dynamic front-end experiences. I excel in fast-paced environments where I can tackle complex problems, build perfomant systems, and contribute to innovative software solutions. Passionate about continuous learning and growth, I am always exploring new technologies and following my curiosity. Let's connect and build something great together!",
  title: "Rohit Dhatrak",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  // editPost: {
  //   url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
  //   text: "Suggest Changes",
  //   appendFilePath: true,
  // },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 45,
  height: 10,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/RohitDhatrak",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/rohit_dhatrak_",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohitdhatrak/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rohit_dhatrak_",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCOmR_eoi2c2iLQND4zZUYSw",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
