import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div className={s.loadMoreBtn}>
      <button className={s.btn} onClick={() => setPage((prev) => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;