import style from '../styles/Home.module.css';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i);
  };
  return(
    <div>
      {
        pages.map((page,index) => (
          <button key={index} onClick={() => setCurrentPage(page)} className={style.btn_pagination}>{page}</button>
        ))
      }
    </div>
  )
};

export default Pagination;