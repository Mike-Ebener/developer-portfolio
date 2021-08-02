import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../Resume';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    // new below
    // resumeSelected,
    // setResumeSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* <span role="img" aria-label="camera"> 📸</span>  */}
          Mike Ebener
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${Resume}`}>
          <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

// working initial setup below

// import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Nav(props) {
//   const {
//     categories = [],
//     setCurrentCategory,
//     contactSelected,
//     currentCategory,
//     setContactSelected,
//   } = props;

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           {/* <span role="img" aria-label="camera"> 📸</span>  */}
//           Mike Ebener
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
//               About me
//             </a>
//           </li>
//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name && !contactSelected && 'navActive'
//                 }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;