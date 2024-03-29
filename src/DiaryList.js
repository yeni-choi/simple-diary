import { useContext } from 'react';
import DiaryItem from './DiaryItem.js'
import { DiaryStateContext } from './App.js';

const DiaryList = () => {
  
  const diaryList = useContext(DiaryStateContext)

  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>total: {diaryList.length}</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps={
  diaryList:[],
};

export default DiaryList;