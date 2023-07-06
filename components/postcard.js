import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function PostCard(post) {
  return (
    <div className={styles.card} >
      <h2>
        <Link href={`/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </div>
  )
}