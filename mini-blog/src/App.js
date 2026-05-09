import CommentList from "./component/list/CommentList";
import CommentListItem from "./component/list/CommentListItem";
import PostList from "./component/list/PostList";
import PostListItem from "./component/list/PostListItem";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
import Button from "./component/ui/Button";
import TextInput from "./component/ui/TextInput";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<MainPage />} />
        <Route path ="/PostWritePage" element={<PostWritePage />} />
        <Route path ="/post/:id" element={<PostViewPage />} />
        <Route path ="/CommentList" element={<CommentList />} />
        


      </Routes>
    </div>
  );
}

export default App;
