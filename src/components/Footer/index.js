import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

const Footer = () => (
    <div className="footer">
        <ul className="flex-row">
          <li className="mx-2">
              <a href="https://github.com/Mike-Ebener">GitHub </a>
        </li>
        <li className="mx-2">
        <a href="https://www.linkedin.com/in/mike-ebener-6b08557b/">LinkedIn </a>
       </li>
        </ul>
    </div>
);

export default Footer;




// // import React from 'react';
// // import { capitalizeFirstLetter } from '../../utils/helpers';
// // import logo1 from "../../assets/small/food/git.jpeg";

// // function Footer (props) {
// //   const {
// //     resources = [],
// //     setCurrentResources,
// //     currentResources,
// //   } = props;

// //   return (
// //     // <header className="flex-row px-1">
  
// //       <footer>
// //         <ul className="flex-row">
// //           <li className="mx-2">
// //           <a href="https://mike-ebener.github.io/run-buddy/">
// //           <img
// //             src={logo1}
// //             alt="Commercial Example"
// //             // className="img-thumbnail mx-1"
// //           />
// //           </a>
// //           </li>
//           {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
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
//           ))} */}
//         </ul>
//       </footer>
//     // </header>
//   );
// }

// export default Footer;
