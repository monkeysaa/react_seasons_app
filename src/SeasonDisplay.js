import React from 'react';

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

    return <div>Season Display Season: {season}</div>
}

export default SeasonDisplay;
