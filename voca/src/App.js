import { Routes, Route } from "react-router-dom";
import CreateDay from "./component/CreateDay";
import CreateWord from "./component/CreateWord"; 
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage"; 
import Header from "./component/Header";
import styled from "styled-components";

const AppCss = styled.div`
    width: 800px;
    margin: 0 auto;
`;

function App() {
  return (
    <AppCss>
    <Header />
    <Routes>
    <Route path = "/" element={<DayList />} />
    <Route path = "/day/:day" element={<Day />} />
    <Route path = "/create_word" element={<CreateWord />} />
    <Route path = "/create_day" element={<CreateDay />} />
    <Route path = "*" element={<EmptyPage />} />
    </Routes>
    </AppCss>
  );
}

export default App;

