import { getFilesBySlug, getFiles } from '../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents} from '../components/MDXComponents';
import styles from '../styles/post.module.css';

export default function Post({ source, frontmatter }){
  return (
    <div>
      <nav className={styles.nav}>
        <button>Hello World</button>
        <div className={styles.options}>
          <button>Option 1</button>
          <button>Option 2</button>
        </div>
      </nav>
      <div className={styles.container}>
        
        <MDXRemote {...source} components={MDXComponents} className={styles.post}/>
      </div>
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