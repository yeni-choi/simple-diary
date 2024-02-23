const DiaryItem = ({
    onDelete,
    id,
    author,
    content,
    emotion,
    created_date
  }) => {
    return (
      <div className="DiaryItem">
        <div className="info">
          <span className="author_info">
            Author : {author} | Emotion : {emotion}
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
        <button
          onClick={() => {
            if (window.confirm(`Do you want to delete #${id} diary post?`)) {
              onDelete(id);
            }
          }}
        >
          Delete
        </button>
        <button>Edit</button>
      </div>
    );
  };
  
  export default DiaryItem;
  