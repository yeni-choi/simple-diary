import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./Lifecycle";
import OptimizeTest from "./OptimizeTest";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0,20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() *5)+1, 
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })

    setData(initData);

  };

  useEffect(() => {
    getData();
  },[])

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1;

    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    const newDiaryList = data.filter(
      (it) => it.id !== targetId
    );
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const getDiaryAnalysis = useMemo(
    () => {
    const goodCount = data.filter((it)=> it.emotion >=3 ).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return {goodCount, badCount, goodRatio};
  },[data.length]
  );

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <LifeCycle />
      <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
      <div>Total : {data.length}</div>
      <div>Positive Diary Total : {goodCount}</div>
      <div>Negative Diary Total : {badCount}</div>
      <div>Positive Diary Ratio : {goodRatio}%</div>
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
};
export default App;
