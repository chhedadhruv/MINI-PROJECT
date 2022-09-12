import { Routes, Route } from 'react-router-dom'
import TopicList from "./Pages/TopicList";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    {/* <Navbar />
    <AnimatedBox /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiments" element={<TopicList />} />
    </Routes>
    </>
  );
}

export default App;
