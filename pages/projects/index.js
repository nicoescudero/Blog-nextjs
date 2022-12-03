import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import style from '../../styles/Projects.module.css';
import projects from "./articles";

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