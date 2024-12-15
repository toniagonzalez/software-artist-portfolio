import { IconChevronsRight, IconComponents } from '@tabler/icons-react';

import { ContentProps, FeaturesProps, HeroProps } from '~/shared/types';

import projectsImg from '~/assets/images/pexels-ketut-subiyanto-4559555.jpg';
import laptopImg from '~/assets/images/pexels-junior-teixeira-2047905.jpeg';

// Hero data on code page *******************
export const heroCode: HeroProps = {
  title: 'Fullstack Software Engineer',
  subtitle:
    "I'm a Software Engineer based in Kalamazoo, Michigan. I am passionate about architecting and building innovative user-informed features. I have an insatiable curiosity for understanding how things work, because a well defined problem is the foundation for a well executed solution. I'm committed to collaboration with people from all walks of life, and this fuels my drive to build tools and features for all users.",
  backgroundKey: 'code',
};

// Feature2 data on code page *******************
export const featuresCode: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Latest Projects',
  },
  items: [
    {
      title: 'Web platform w/Next.js',
      description:
        'Developing ui for Bounti.ai SASS platform using Next.js, Prisma, and Vercel. Also maintain API integrations with Python and Rust backend services.',
      icon: IconComponents,
    },
    {
      title: 'React/Typescript Micro Service',
      description:
        'Collaborated with product and design to create an observability maturity application performance management feature using React/Typescript',
      icon: IconComponents,
    },
    {
      title: 'Java GraphQL Endpoint',
      description: 'Helped design and build a Java graphql endpoint with a postgresql db in support of a high throughput microservice.',
      icon: IconComponents,
    },
    {
      title: 'Migration to Cloud',
      description:
        'Planned initiative to migrate team’s services and databases from on premise to AWS using Terraform and Argo workflows',
      icon: IconComponents,
    },
    {
      title: 'New Relic Alerting via Terraform',
      description:
        'Configured alerting for backend and front end services via Terraform using New Relic’s workflows api',
      icon: IconComponents,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  header: {
    title: 'Experience / Certification',
  },
  items: [
    {
      title: 'Senior Software Engineer - Bounti.ai',
      description: 'Building a SAAS product that surfaces growth signals for outbound sales.',
      icon: IconChevronsRight,
    },
    {
      title: 'Software Engineer - New Relic',
      description: 'Developed and maintained a high throughput observabilty software product.',
      icon: IconChevronsRight,
    },
    {
      title: 'UX / UI Consultant (Freelance)',
      description: 'Provide tools for lead generation, create basic wireframes and full website prototypes.',
      icon: IconChevronsRight,
    },
    {
      title: 'Web Developer (Freelance)',
      description: 'Build branded layouts and custom redesigns',
      icon: IconChevronsRight,
    },
  ],
  image: {
    src: projectsImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  header: {
    title: 'Technologies',
  },
  items: [
    {
      title: 'React / Next.js',
    },
    {
      title: 'HTML / CSS',
    },
    {
      title: 'Terraform',
    },
    {
      title: 'Java',
    },
    {
      title: 'SQL / Postgresql/ MongoDB',
    },
    {
      title: 'Javascript / Node / Typescript',
    },
    {
      title: 'GraphQL',
    },
    {
      title: 'AWS',
    },
  ],
  image: {
    src: laptopImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};
