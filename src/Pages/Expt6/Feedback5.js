import React from "react";
import LeftNav4 from "./LeftNav5";
import "../../styles/LeftNav.css";

function Feedback4() {
  return (
    <>
      <LeftNav4 />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAzlcMwtoDeJ-VAiXTdt66NrpfxudXfkcQUSmfVyhXTQ7YMA/viewform?embedded=true"
          width="640"
          height="585vh"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}

export default Feedback4;
