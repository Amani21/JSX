import React from 'react'
import "./App.css"

const Mainvideo = () => {
  return (
    <div className='vid'>
        <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  )
}

export default Mainvideo