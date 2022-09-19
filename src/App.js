import { Routes, Route } from 'react-router-dom'
import TopicList from "./Pages/TopicList";
import Home from "./Pages/Home";
import SetsSim from './Simulations/SetsSim';

function App() {
  return (
    <>
    {/* <Navbar />
    <AnimatedBox /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiments" element={<TopicList />} />
      <Route path="/setssimulator" element={<SetsSim />} />
    </Routes>
    </>
  );
}

export default App;
