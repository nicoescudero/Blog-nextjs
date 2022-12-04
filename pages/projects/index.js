import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import style from '../../styles/Projects.module.css';
import github from '../../public/github.png';
import siteweb from '../../public/internet.png';

export default function Projects (){
  return (
    <div>
      <Navbar/>
      <div className={style.main}>
        {
          projects.map(( item, index ) => {
            return (
              <div className={style.article} key={index}>
                <div className={style.title}>
                  <h3 className="text-sm font-bold uppercase text-blue-700">{item.title}</h3>
                  <div className={style.title}>
                    {
                      item.links.map((link,index) => (
                        <div className={style.link} key={index}>
                          <a href={link.href}><Image src={link.src} alt={link.alt}/></a>
                        </div>    
                      ))
                    }
                  </div>
                </div>
                <p>{item.description}</p>
                <div className={style.listtech}>
                  {
                    item.technology.map((name,index) => (
                      <label className={style.technology} key={index}>{name}</label>
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer footer={style.footer}/>
    </div>
  );
};

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