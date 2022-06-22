import React, {useContext} from 'react'
import Context from '../../store/context'

function MobileHome() {

    const {count, onClickHandler, name} = useContext(Context);

  return (
    <div className='mobile-home'>
    <div
      className="name-container"
      onClick={onClickHandler}
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
    </div>
  </div>
  )
}

export default MobileHome