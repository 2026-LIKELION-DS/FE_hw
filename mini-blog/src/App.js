import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage'; // 주석 해제
import PostViewPage from './component/page/PostViewPage';

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<MainPage />} />
      
      {/* 글 작성 페이지: 경로를 /post-write로 설정 */}
      <Route path="/post-write" element={<PostWritePage />} />
      
      {/* 글 상세 페이지 */}
      <Route path="/post/:postId" element={<PostViewPage />} />
    </Routes>
  );
}

export default App;