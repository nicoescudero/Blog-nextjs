import { getFilesBySlug, getFiles } from '../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '../components/navbar'
import ButtonCoffee from '../components/btn_coffee'
import Footer from '../components/footer';
import style from '../styles/Post.module.css';

export default function Post({ source, frontmatter }){
  return (
    <div>
      <div className={style.container}>
      <Navbar/>
      <article className={style.post}>
        <MDXRemote {...source}/>
      </article>
      <ButtonCoffee/>
      </div>
      <Footer footer={style.footer}/>
    </div>
  );
};

export async function getStaticProps({params}){
  const { source, fronmatter } = await getFilesBySlug(params.slug);
  return {
    props: { source, fronmatter}
  }
};

// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths(){
  const posts = await getFiles();
  const paths = posts.map(post => ({
    params: {
      slug: post.replace(/\.mdx/,''),
    },
  }));
  return {
    paths, fallback: false
  };
};
