import React, { useState } from 'react'
import './Home-footnotes.css'

const Homefootnotes = () => {
  const [isopen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="Home-footnotes-container">
      <div className="home-footnote-inner1">
        <p onClick={toggle}>Footnotes</p>
        {/* <img src={} alt="" /> */}
      </div>

      <div className={`home-footnote-inner-open ${isopen ? "open" : ""}`}>
        <h1>test</h1>
      </div>
    </div>
  );
};

export default Homefootnotes;
