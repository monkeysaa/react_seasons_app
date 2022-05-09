import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';

// The reason we're extending React is because it subclasses React.Component,
// borrowing its functionality into our App class.
class App extends React.Component {
  constructor(props) {
    super(props);

    // INITIAL ASSIGNMENT IS THE ONLY TIME WE DIRECTLY ASSIGN TO THIS.STATE
    this.state = { lat: null, errorMessage: '' };
    // EVERY OTHER TIME WE USE setState!

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // This line won't run yet. Runs later, asynch.
        this.setState({ lat: position.coords.latitude })
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // Never put any work inside the render method, because it's goning to be called all the dang time
  // Render gets called much more than rest of code runs. So minimize work in here.
  // It loads JSX and NOTHING ELSE.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading...</div>
  }
}
createRoot(document.getElementById('root')).render(<App />)
