export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'HDStream',
  description: 'HDStream is a movie and tv show tracker built by Mohamed Gado.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      scroll: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      scroll: true,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      scroll: true,
    },
    {
      title: 'Watch History',
      href: '/watch-history',
      scroll: true,
    },
    {
      title: 'Disclaimer',
      href: '/disclaimer',
      scroll: false,
    },
  ],
  personalLogo:
    'https://pbs.twimg.com/profile_images/1687092699529195521/odspmCVf_400x400.jpg',
  links: {
    twitter: 'https://x.com/henry_dust91051',
    github: 'https://www.youtube.com/@WebDev_Insider',
    website: 'https://henrydustin.netlify.app/',
    buyMeACoffee: 'https://www.instagram.com/hen_rydustin/',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  email: 'henrydustin95@gmail.com',
  websiteURL: 'https://hdstream.vercel.app/',
  twitterTag: '@henry_dust91051',
  image:
    'https://pbs.twimg.com/profile_images/1687092699529195521/odspmCVf_400x400.jpg',
  keywords: [
    'Reely',
    'Reely Site',
    'Reely Tracker',
    'Movie Tracker',
    'TV Show Tracker',
    'Reely Live',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Mohamed Gado',
    'Gado',
    'Gado Mohamed',
    'React Developer',
    'React Engineer',
    'React.js',
    'ReactJS',
    'React Developer',
    'Next.js',
    'NextJS',
    'Next.js Developer',
    'Next.js Engineer',
  ],
}
