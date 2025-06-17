// import React from "react";
// import countryFacts from "../api/countryData.json";

// const About = () => {
//   return (
//     <section className="section-about container">
//       <h2 className="container-title">
//         Here are the Interesting Facts
//         <br />
//         we're proud of
//       </h2>

//       <div className="gradient-cards">
//         {countryFacts.map((country) => {
//           const {id, countryName, capital, isoCode, interestingFact} = country;
//           return (
//             <div className="card" key={id}>
//               <div className="container-card bg-blue-box">
//                 <p className="card-title">{countryName}</p>
//                 <p>
//                   <span className="card-description">Capital: </span>
//                   {capital}
//                 </p>
//                 <p>
//                   <span className="card-description">ISO Code: </span>
//                   {isoCode}
//                 </p>
//                 <p>
//                   <span className="card-description">Interesting Fact: </span>
//                   {interestingFact}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState } from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 6;

  const displayedCountries = showAll ? countryFacts : countryFacts.slice(0, VISIBLE_COUNT);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {displayedCountries.map((country) => {
          const { id, countryName, capital, isoCode, interestingFact } = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">ISO Code: </span>
                  {isoCode}
                </p>
                <p>
                  <span className="card-description">Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {countryFacts.length > VISIBLE_COUNT && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            className="explore-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default About;

