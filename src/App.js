import React, {useRef, useEffect} from 'react';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"신경식",
    content:"하이 1",
    emotion:5,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"이순신",
    content:"하이 2",
    emotion:4,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"홍길동",
    content:"하이 3",
    emotion:3,
    created_date: new Date().getTime(),
  },
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
