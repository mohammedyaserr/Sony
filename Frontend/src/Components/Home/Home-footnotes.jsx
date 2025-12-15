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
                <div className="home-footnote-inner-open-inner">
                    <span>1</span><p> Quoted MRP is for 1 unit of the product. Prices are subject to change without prior notice.</p>
                </div>

                <div className="home-footnote-inner-open-inner-2">
                    <ul className='footnote-list'>
                        <li><span className='test'>Actual product may differ slightly in appearance to illustrations/ picture provided.</span></li>
                        <li><span className='test'>	Features, Specification, weight & price are subject to change without prior notice.</span></li>
                        <li><span className='test'>While efforts have been placed to provide accurate information, there could be human errors which may crept in. In the event of discrepancy, the product operating instructions supplied with product shall be the authentic reference point.</span></li>
                        <li><span className='test'>	Services availability depends on region. A part or whole of software/services installed into or accessible through the product may be changed, discontinued, removed, suspended, or terminated without notice.</span></li>
                        <li><span className='test'>	The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Sony Group Corporation and its subsidiaries is under licence.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Homefootnotes;
