import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/buddy-background.jpeg";
import photo1 from "../../assets/small/commercial/code-quiz.jpeg";
import photo2 from "../../assets/small/commercial/horiseon-background.jpeg";
import photo3 from "../../assets/small/commercial/covid-tracker.jpeg";
import photo4 from "../../assets/small/commercial/just-noise.jpeg";
import photo5 from "../../assets/small/commercial/budget-tracker.jpeg";
import photo6 from "../../assets/small/commercial/travel-share.jpeg";


function Gallery(props) {
  const currentCategory = {
    name: "Projects",
    description:
      "Screenshots of Products that link to live URLs",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <a href="https://mike-ebener.github.io/run-buddy/">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/run-buddy">Run Buddy - Fitness Website </a>
          </ul>
      </div>
      <div className="flex-row">
        <a href="https://mike-ebener.github.io/code-quiz/">
          <img
            src={photo1}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/code-quiz">Code Quiz - Test your skills! </a>
          </ul>
          
      </div>
      <div className="flex-row">
        <a href="https://mike-ebener.github.io/challenge-1/">
          <img
            src={photo2}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/challenge-1">Horiseon - SEO Services </a>
          </ul>
      </div>
      <div className="flex-row">
        <a href="https://mike-ebener.github.io/covid-tracker/">
          <img
            src={photo3}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/covid-tracker">Covid Tracker - Data Summary </a>
          </ul>
      </div>
      <div className="flex-row">
        <a href="https://just-noise.herokuapp.com/">
          <img
            src={photo4}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/d-trecker/just-noise">Just Noise - Music Blog </a>
          </ul>
      </div>
      <div className="flex-row">
        <a href="https://vast-bayou-58941.herokuapp.com/">
          <img
            src={photo5}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/budget-tracker">Budget Tracker  </a>
          </ul>
      </div>
      <div className="flex-row">
        <a href="https://travel-share44.herokuapp.com/">
          <img
            src={photo6}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <ul class="work-title"><a href="https://github.com/Mike-Ebener/travel-share">Travel Share</a>
          </ul>
      </div>

    </section>
  );
}
export default Gallery;

// import React from 'react';
// import PhotoList from '../PhotoList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Gallery(props) {
//   const { currentCategory } = props;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       <PhotoList category={currentCategory.name} />
//     </section>
//   );
// }
// export default Gallery;



