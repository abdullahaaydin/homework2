import React from 'react'
import about from './about'
import projectSection from './projectsection'
import imageOfLocation from './imageOfLocation'
import endOfThePage from './endOfThePage'
import contact from './contact'



function pageContent() {
  return (<>
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>

        <projectSection/>
        <about/>
        <contact/>
        <imageOfLocation/>
        <endOfThePage/>



    </div>

    </>
  )
}

export default pageContent