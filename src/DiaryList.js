import DiaryItem from './DiaryItem.js'

const DiaryList = ({ onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>total: {diaryList.length}</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps={
  diaryList:[],
};

export default DiaryList;