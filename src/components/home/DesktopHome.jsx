import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import Context from '../../store/context';

//["E", "S", "Z", "T", "E", "R", " ", "K", "A", "D", "A", "R"];


function DesktopHome() {

  const {onMouseEnter, onMouseLeave, name, text} = useContext(Context);
  
  return (
    <div className='desktop-home'>
      <div
        className="name-container "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ position: "relative", width: "100%" }}
      >
        {name?.map((item, index) => (
          <div key={index} className={"regular-style"}>
            <span
              style={{
                position: "absolute",
                top: item.top,
                right: item.right
              }}
            ><h1>{item.value}</h1>
            </span>
          </div>
        ))}
        {text && <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='developer-text'>
          <Link to='/about'><h3>{'<Fullstack developer/>'}</h3></Link>
        </div>}
      </div>
    </div>
  );
}

export default DesktopHome;