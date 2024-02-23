import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "yewon",
    content: "content1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "choi",
    content: "content2",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "yeni",
    content: "content3",
    emotion: 5,
    created_date: new Date().getTime()
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};
export default App;
