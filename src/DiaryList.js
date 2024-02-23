const DiaryList = ({ diaryList }) => {
    return (
      <div className="DiaryList">
        <h2>Diary List</h2>
        <h4>total: {diaryList.length}</h4>
      </div>
    );
  };
  
  export default DiaryList;