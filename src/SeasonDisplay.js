import './SeasonDisplay.css';
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
    iconName: 'fas fa-sun fa-10x'
  },
  winter: {
    text: "Brr, it's cold!",
    iconName: 'fas fa-snowflake fa-10x'
  }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] // {text, iconName}

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName}`} />
        <h1>{text}</h1>
        <i className={`icon-right ${iconName}`} />
      </div>
    );
}

export default SeasonDisplay;
