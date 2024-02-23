import DiaryItem from './DiaryItem.js'

const DiaryList = ({ diaryList }) => {
    return (
      <div className="DiaryList">
        <h2>Diary List</h2>
        <h4>total: {diaryList.length}</h4>
        <div>
          {diaryList.map((it) => (
            <DiaryItem key={`diaryitem_${it.id}`} {...it} />
          ))}
        </div>
      </div>
    );
  };
  
  DiaryList.defaultProps={
    diaryList:[],
  };

  export default DiaryList;