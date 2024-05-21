import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Projects.module.css';
import github from '../public/github.png';
import siteweb from '../public/internet.png';

import { useState } from 'react';

export default function Projects (){
  const [projects, _setProjects] = useState([
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
    title: 'Rockstar Games landing page',
    links: [
      {
        href: 'https://github.com/nicoescudero/rs-clone',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Rediseño de la pagina principal de Rockstar games',
    technology: ['REACT','CSS','JAVASCRIPT'],
  },
  {
    title: 'Food landing page',
    links: [
      {
        href: 'https://github.com/nicoescudero/food-landing-page',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Landing page de un restaurante',
    technology: ['REACT','CSS','JAVASCRIPT','RESPONSIVE'],
  },
  {
    title: 'Portafolio landing page',
    links: [
      {
        href: 'https://github.com/nicoescudero/Portfolio-Design1',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://nicoescudero.github.io/Portfolio-Design1/',
        src: siteweb,
        alt: 'siteweb'
      },
    ],
    description: 'Una landing page estatica ',
    technology: ['HTML','CSS','JAVASCRIPT','RESPOSIVE'],
  },
  {
    title: 'Digital Studio JK',
    links: [
      {
        href: 'https://github.com/nicoescudero/Digital-Studio-LandingPage',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://nicoescudero.github.io/Digital-Studio-LandingPage/',
        src: siteweb,
        alt: 'siteweb'
      },
    ],
    description: 'Landing page de un estudio digital',
    technology: ['HTML','CSS','JAVASCRIPT','RESPONSIVE'],
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
  ]);

  return (
    <div>
      <Navbar/>
      <div className={styles.main}>
        {
          projects.map(( item, index ) => {
            return (
              <div className={styles.article} key={index}>
                <div className={styles.title}>
                  <h3>{item.title}</h3>
                  <div className={styles.title}>
                    {
                      item.links.map((link,index) => (
                        <div className={styles.link} key={index}>
                          <a href={link.href} target='_blank' rel='noreferrer'><Image src={link.src} alt={link.alt} className={styles.iconGH}/></a>
                        </div>    
                      ))
                    }
                  </div>
                </div>
                <p>{item.description}</p>
                <div className={styles.listtech}>
                  {
                    item.technology.map((name,index) => (
                      <label className={styles.technology} key={index}>{name}</label>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer footer={styles.footer}/>
    </div>
  );
};

