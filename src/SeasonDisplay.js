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

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'fas fa-sun'
  },
  winter: {
    text: "Brr, it's cold!",
    iconName: 'fas fa-snowflake'
  }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] // {text, iconName}

    return (
      <div>
        <i className={`${iconName}`} />
        <h1>{text}</h1>
        <i className={`${iconName}`} />
      </div>
    );
}

export default SeasonDisplay;
