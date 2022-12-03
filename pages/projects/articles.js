import github from '../../public/github.png';
import siteweb from '../../public/internet.png';

const projects = [
  {
    title: 'API-REST TS',
    links: [
      {
        href: 'https://github.com/nicoescudero/TS-Singleton-API-REST',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST construida con typescript y el patron singleton.',
    technology: ['NODEJS','TYPESCRIPT'],
  },
  {
    title: 'ONG - Somos Mas (Alkemy)',
    links: [
      {
        href: 'https://github.com/alkemyTech/OT226-Server',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Esta API-REST fue construida con mis compañeros del desafio alkemy. La cual cumple con los requisitos solicitados por parte de la ONG.',
    technology: ['NODEJS','EXPRESS','SWAGGER','MOCHA-CHAI','AWS','JWT','TEST UNITARIOS'],
  },
  {
    title: 'Generador de codigo QR',
    links: [
      {
        href: 'https://github.com/nicoescudero/qr-code-generator',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://qr-code-gntor.herokuapp.com/',
        src: siteweb,
        alt: 'SiteWeb'
      }
    ],
    description: 'Generador de codigo QR construido con NodeJS y plantillas ejs.',
    technology: ['NODEJS','CSS','EJS'],
  },
  {
    title: 'API-REST de Notas',
    links: [
      {
        href: 'https://github.com/nicoescudero/Api-Notes',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST con autenticacion de usuarios y operaciones CRUD de las notas.',
    technology: ['NODEJS','MONGOOSE','EXPRESS','JWT','EXPRESS-VALIDATOR'],
  },
  {
    title: 'API de Mercado',
    links: [
      {
        href: 'https://github.com/nicoescudero/Api_Market',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST de mercado; permite hacer operaciones CRUD con usuarios y productos.',
    technology: ['NODEJS','EXPRESS','MONGOOSE','JWT','PASSPORT'],
  },
  {
    title: 'GraphQL de Productos',
    links: [
      {
        href: 'https://github.com/nicoescudero/Graphql-Api',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Proyecto con GraphQL para realizar operaciones CRUD con Productos.',
    technology: ['NODEJS','EXPRESS-GRAPHQL','MONGOOSE','GRAPHQL'],
  },
];

export default projects;