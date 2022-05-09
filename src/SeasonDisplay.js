import React from 'react';
import { Sun, Snowflake } from 'react-icons/fa';

// extract as much logic from the function as possible
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Brr, it\'s chilly!' : 'Let\'s hit the beach!'
    const icon = season === 'winter' ? 'fas fa-snowflake' : 'fas fa-sun';
    console.log(icon)

    return (
      <div>
        <i className={`${icon}`} />
        <h1>{text}</h1>
        <i className={`${icon}`} />
      </div>
    );
}

export default SeasonDisplay;
