import { getFilesBySlug, getFiles } from '../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '../components/navbar';
import ButtonCoffee from '../components/btn_coffee';
import Footer from '../components/footer';
import styles from '../styles/post.module.css';

export default function Post({ source, frontmatter }){
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
      <article className={styles.post}>
        <MDXRemote {...source}/>
      </article>
      <ButtonCoffee/>
      </div>
      <Footer footer={styles.footer}/>
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
