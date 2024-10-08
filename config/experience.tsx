import { Link } from '@chakra-ui/react'

export type Company = 'Jung' | 'VNNET'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Jung: {
    name: 'Jung Talents',
    longName: '',
    subDetail: 'JT & B Solutions Pty Ltd',
    url: 'https://www.jungtalents.com/',
    position: 'Software Engineer',
    duration: 'Nov 2022 - Present',
    logo: {
      light: '/worked_at_logos/jung_talents_logo.jpg',
      dark: '/worked_at_logos/jung_talents_logo.jpg',
    },
    roles: [
      <>
        Spearheaded the design and development of the{' '}
        <Link
          aria-label="PTE Master"
          href="https://www.masterpte.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          PTE Master
        </Link>{' '}
        project, utilizing .NET, PostgreSQL, and AWS, tailored to meet the specific needs of clients in the
        educational sector.
      </>,
      <>
        Participated in the{' '}
        <Link
          aria-label="Mentem"
          href="https://www.mentem.co/"
          target="_blank"
          rel="noreferrer"
        >
          Mentem
        </Link>{' '}
        project as a full stack developer, primarily using Angular and .NET,
        created API endpoints for user management .
      </>,
      <>
        Led a team in the{' '}
        <Link
          aria-label="Carina Eye Care"
          href="https://www.carinaeyecare.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Carina Eye Care
        </Link>{' '}
        project as with mainly Storyblok, React.js, AWS and
        provided comprehensive user training and support to clients and
        stakeholders
      </>,
    ],
  },
  VNNET: {
    name: 'VNNET',
    longName: 'VNNET Technology Joint Stock Company',
    subDetail: 'Technology Joint Stock Company',
    url: 'https://netvn.com.vn/',
    position: 'Software Engineer',
    duration: 'Apr 2022 - Sep 2022',
    logo: {
      light: '/worked_at_logos/vnnet.png',
      dark: '/worked_at_logos/vnnet.png',
    },
    roles: [
      <>
        Developed websites using Spring Boot to enhance software products aimed
        at monitoring business tax payments.
      </>,
      <>
        Effectively incorporated REST APIs and web services into web
        applications to improve functionality.
      </>,
      <>
        Implemented a custom authentication provider for Spring Security to
        handle additional authentication checks.
      </>,
      <>
        Performed comprehensive code reviews, offering constructive feedback to
        colleagues.
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.Jung, Experiences.VNNET]
