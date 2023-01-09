import React from 'react'
import "../Styles/About.css"
import img1 from "../Images/image1.webp"
import img2 from "../Images/image2.webp"

function About() {
  return (
    <div className='g-about'>
      
        <h1 id='g-h1'>Who are we?</h1>
         <div className='about-us'>
        <div className='g-par'>
          <p id='par'>Butterfly-Peak is Kenya's leading web-based company in Child Care located in Nairobi.We formed this company to facilitate the easy process of parents searching and hiring a suitable babysitter of their choice.
          We provide babysitters who are professionally trained and their main aim is to provide the best baby care service to parents.</p>
          <p id='par'> The babysitters are flexible enough to come to the parents house.This makes it easier for parents who are very busy and have no time to drop off and pick up their kids from the daycare.   
          Butterfly-Peak strongly believes that children need professional care so that they can grow well and parents can run their errands in peace with no worry knowing that their children are under the care of a trained babysitter.</p>
          <p id='par'>
            Our babysitters are well-trained, trustworthy, attentive, loving, kind, creative, confident, reliable and dependable.
            They take their work seriously, observe safety measures and love children.
          </p>
          </div>
          <img id='img1' src={img1} alt="" />
        </div>
        <div className='about1'>
          <img id='img2' src={img2} alt="" />
          <div className='g-par'>
          <p id='par'>Worried about where you live?We got you sorted.You can get a baby sitter who lives close to you by searching near one who is near your location.</p>
          <p id='par'>You can also book a babysitter earlier and have them come on the expected day.There is also a section of favourite babysitters where a parents can list their favourites and have an easy time when hiring one.</p>
          <p id='par'>Butterfly-Peak is here to make parents life easy and peaceful and ensure children grow in a friendly and conducive environment.</p>
          </div>
        </div>
    </div>
  )
}

export default About