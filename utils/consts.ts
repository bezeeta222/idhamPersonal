// import { env } from "env/client";

export const ORIGIN = process.env.NEXT_PUBLIC_HOST;
export const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";
export const HOST = `${PROTOCOL}://${ORIGIN}` as const;

export const SEPARATOR = " • ";

export const SITE_TITLE = "idham portfolio";
export const SITE_TITLE_TEMPLATE = `%s ${SEPARATOR} ${SITE_TITLE}`;
export const SHORT_DESCRIPTION = "My personal website";
export const DEFAULT_DESCRIPTION =
  "Hi, I'm idham - full-stack developer, freelancer, blogger, new technologies enthusiast, enjoy my website!";

export const DEFAULT_IMAGE_URL = `/img/banner.png`;

export const SOCIALS = [
  {
    name: "twitter",
    color: "#94ccff",
    link: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`,
  },
  {
    name: "linkedin",
    color: "#2867B2",
    link: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
  },
  {
    name: "github",
    color: "#333",
    link: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  },
  {
    name: "rss",
    color: "#ee802f",
    link: "/feed",
  },
  {
    name: "whatsapp",
    color: "#075e54",
    link: "https://api.whatsapp.com/send?phone=60172822871",
  },
  {
    name: "resume",
    color: "#6973B1",
    link: "",
  },
] as const;

export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
