import { Routes, Route } from "react-router-dom";
import TopicList from "./Pages/TopicList";
import Home from "./Pages/Home";
import SetsSim from "./Pages/Expt1/LeftNav";
import Aim from "./Pages/Expt1/Aim";
import Objective from "./Pages/Expt1/Objective";
import Theory from "./Pages/Expt1/Theory";
import Procedure from "./Pages/Expt1/Procedure";
import Simulation from "./Pages/Expt1/Simulation";
import References from "./Pages/Expt1/References";
import Feedback from "./Pages/Feedback";
import Aim1 from "./Pages/Expt2/Aim1";
import Objective1 from "./Pages/Expt2/Objective1";
import Procedure1 from "./Pages/Expt2/Procedure1";
import Simulation1 from "./Pages/Expt2/Simulation1";
import Theory1 from "./Pages/Expt2/Theory1";
import References1 from "./Pages/Expt2/References1";
import LeftNav1 from "./Pages/Expt2/LeftNav1";
import Aim2 from "./Pages/Expt3/Aim2";
import Objective2 from "./Pages/Expt3/Objective2";
import Procedure2 from "./Pages/Expt3/Procedure2";
import Simulation2 from "./Pages/Expt3/Simulation2";
import Theory2 from "./Pages/Expt3/Theory2";
import References2 from "./Pages/Expt3/References2";
import LeftNav2 from "./Pages/Expt3/LeftNav2";
import Aim3 from "./Pages/Expt4/Aim3";
import Objective3 from "./Pages/Expt4/Objective3";
import Procedure3 from "./Pages/Expt4/Procedure3";
import Simulation3 from "./Pages/Expt4/Simulation3";
import Theory3 from "./Pages/Expt4/Theory3";
import References3 from "./Pages/Expt4/References3";
import LeftNav3 from "./Pages/Expt4/LeftNav3";
import Feedback1 from "./Pages/Expt2/Feedback1";
import Feedback2 from "./Pages/Expt3/Feedback2";
import Feedback3 from "./Pages/Expt4/Feedback3";
import Aim4 from "./Pages/Expt5/Aim4";
import Objective4 from "./Pages/Expt5/Objective4";
import Procedure4 from "./Pages/Expt5/Procedure4";
import Simulation4 from "./Pages/Expt5/Simulation4";
import Theory4 from "./Pages/Expt5/Theory4";
import References4 from "./Pages/Expt5/References4";
import LeftNav4 from "./Pages/Expt5/LeftNav4";
import Feedback4 from "./Pages/Expt5/Feedback4";
import Aim5 from "./Pages/Expt6/Aim5";
import Objective5 from "./Pages/Expt6/Objective5";
import Procedure5 from "./Pages/Expt6/Procedure5";
import Simulation5 from "./Pages/Expt6/Simulation5";
import Theory5 from "./Pages/Expt6/Theory5";
import References5 from "./Pages/Expt6/References5";
import LeftNav5 from "./Pages/Expt6/LeftNav5";
import Feedback5 from "./Pages/Expt6/Feedback5";

function App() {
  return (
    <>
      {/* <Navbar />
    <AnimatedBox /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiments" element={<TopicList />} />
        <Route path="/warshals" element={<LeftNav1 />} />
        <Route path="/principleofinclusionexclusion" element={<LeftNav2 />} />
        <Route path="/graphtheory" element={<LeftNav3 />} />
        <Route path="/setsexp" element={<SetsSim />} />
        <Route path="/setsexp/aim" element={<Aim />} />
        <Route path="/warshals/aim" element={<Aim1 />} />
        <Route path="/principleofinclusionexclusion/aim" element={<Aim2 />} />
        <Route path="/graphtheory/aim" element={<Aim3 />} />
        <Route path="/setsexp/theory" element={<Theory />} />
        <Route path="/warshals/theory" element={<Theory1 />} />
        <Route
          path="/principleofinclusionexclusion/theory"
          element={<Theory2 />}
        />
        <Route path="/graphtheory/theory" element={<Theory3 />} />
        <Route path="/setsexp/procedure" element={<Procedure />} />
        <Route path="/warshals/procedure" element={<Procedure1 />} />
        <Route
          path="/principleofinclusionexclusion/procedure"
          element={<Procedure2 />}
        />
        <Route path="/graphtheory/procedure" element={<Procedure3 />} />
        <Route path="/setsexp/simulation" element={<Simulation />} />
        <Route path="/warshals/simulation" element={<Simulation1 />} />
        <Route
          path="/principleofinclusionexclusion/simulation"
          element={<Simulation2 />}
        />
        <Route path="/graphtheory/simulation" element={<Simulation3 />} />
        <Route path="/setsexp/objective" element={<Objective />} />
        <Route path="/warshals/objective" element={<Objective1 />} />
        <Route
          path="/principleofinclusionexclusion/objective"
          element={<Objective2 />}
        />
        <Route path="/graphtheory/objective" element={<Objective3 />} />
        <Route path="/setsexp/references" element={<References />} />
        <Route path="/warshals/references" element={<References1 />} />
        <Route
          path="/principleofinclusionexclusion/references"
          element={<References2 />}
        />
        <Route path="/graphtheory/references" element={<References3 />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/warshals/feedback" element={<Feedback1 />} />
        <Route
          path="/principleofinclusionexclusion/feedback"
          element={<Feedback2 />}
        />
        <Route path="/graphtheory/feedback" element={<Feedback3 />} />
        <Route path="/pigeonhole" element={<LeftNav4 />} />
        <Route path="/pigeonhole/aim" element={<Aim4 />} />
        <Route path="/pigeonhole/objective" element={<Objective4 />} />
        <Route path="/pigeonhole/procedure" element={<Procedure4 />} />
        {/* <Route path="/pigeonhole/simulation" element={<Simulation4 />} /> */}
        <Route path="/pigeonhole/theory" element={<Theory4 />} />
        <Route path="/pigeonhole/references" element={<References4 />} />
        <Route path="/pigeonhole/feedback" element={<Feedback4 />} />
        <Route path="/recurrencerelation" element={<LeftNav5 />} />
        <Route path="/recurrencerelation/aim" element={<Aim5 />} />
        <Route path="/recurrencerelation/objective" element={<Objective5 />} />
        <Route path="/recurrencerelation/procedure" element={<Procedure5 />} />
        <Route path="/recurrencerelation/simulation" element={<Simulation5 />} />
        <Route path="/recurrencerelation/theory" element={<Theory5 />} />
        <Route path="/recurrencerelation/references" element={<References5 />} />
        <Route path="/recurrencerelation/feedback" element={<Feedback5 />} />
      </Routes>
    </>
  );
}

export default App;
