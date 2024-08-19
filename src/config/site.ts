type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
      twitter: string;
      github: string;
    };
  };
  
  export const siteConfig: SiteConfig = {
    name: "Codemasters",
    description:
      "Cybersecurity forensic",
    url: "https://codemasters-psi.vercel.app/",
    ogImage: "https://codemasters-psi.vercel.app//og",
    links: {
      twitter: "https://twitter.com/cybersecurity-forensic",
      github: "https://github.com/trunk-mortise",
    },
  };