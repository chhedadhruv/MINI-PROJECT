import { Routes, Route } from 'react-router-dom'
import TopicList from "./Pages/TopicList";
import Home from "./Pages/Home";
import SetsSim from './Pages/Expt1/Sets';
import Aim from './Pages/Expt1/Aim';
import Objective from './Pages/Expt1/Objective';
import Theory from './Pages/Expt1/Theory';
import Procedure from './Pages/Expt1/Procedure';
import Simulation from './Pages/Expt1/Simulation';
import References from './Pages/Expt1/References';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <>
    {/* <Navbar />
    <AnimatedBox /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiments" element={<TopicList />} />
      <Route path="/setsexp" element={<SetsSim />} />
      <Route path="/setsexp/aim" element={<Aim />} />
      <Route path="/setsexp/theory" element={<Theory />} />
      <Route path="/setsexp/procedure" element={<Procedure />} />
      <Route path="/setsexp/simulation" element={<Simulation />} />
      <Route path="/setsexp/objective" element={<Objective />} />
      <Route path="/setsexp/references" element={<References />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
    </>
  );
}

export default App;
