import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './LoadingSpinner';
// import "semantic-ui-css/semantic.min.css";

// The reason we're extending React is because it subclasses React.Component,
// borrowing its functionality into our App class.
class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  // React recommends that you don't do date loading inside constructor.
  // Instead, put it within componentDidMount - convention.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <Spinner text='Please enable geolocation permissions.' />
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner text='Loading...' />;
  }
  // Never put any work inside the render method, because it's goning to be called all the dang time
  // Render gets called much more than rest of code runs. So minimize work in here.
  // It loads JSX and NOTHING ELSE.
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
createRoot(document.getElementById('root')).render(<App />)
