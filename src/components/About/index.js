import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Mike is a Product Management fanatic and loves solving problems for his customers.  He’s had opportunities to learn key product strategy and operations at Fortune 1 (Walmart) but hasn’t had deep exposure to software development.  He’s excited to learn the details of software development so he can better support engineering partners and position himself for further growth in Product. When not writing code and developing Products, Mike enjoys spending time in the San Francisco Bay on his boat. 
      </p>
      </div>
    </section>
  )
}

export default About