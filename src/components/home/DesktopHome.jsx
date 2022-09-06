import React from "react";
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import Context from '../../store/context';
import {motion} from 'framer-motion'

//["E", "S", "Z", "T", "E", "R", " ", "K", "A", "D", "A", "R"];


function DesktopHome() {

  const {onMouseEnter, onMouseLeave, name, text} = useContext(Context);
  
  return (
    <div className='desktop-home'>
      <div
        className="name-container "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ position: "relative", width: "100%", transitionDuration: '1s' }}
      >
        {name?.map((item, index) => (
          <motion.div key={index} className={"regular-style"}>
            <motion.span
              style={{
                position: "absolute",
                top: item.top,
                right: item.right
              }}
              whileHover={{rotate: '120deg', transitionDuration: '0.7'}}
            ><h1>{item.value}</h1>
            </motion.span>
          </motion.div>
        ))}
        {text && <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='developer-text'>
          <Link to='/about'><h3>{'<Fullstack developer/>'}</h3></Link>
        </div>}
      </div>
    </div>
  );
}

export default DesktopHome;