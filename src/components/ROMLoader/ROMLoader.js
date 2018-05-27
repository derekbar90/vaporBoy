import { Component } from "preact";

import ROMSourceSelector from "./ROMSourceSelector/ROMSourceSelector";

export default class ROMLoader extends Component {
  constructor() {
    super();
    this.setState({
      viewMyCollection: false,
      viewHomebrew: false
    });
  }

  hideROMLoader() {
    this.props.hide();
  }

  goToPreviousView() {
    this.setState({
      viewMyCollection: false,
      viewHomebrew: false
    });
  }

  viewMyCollection() {
    this.setState({
      viewMyCollection: true,
      viewHomebrew: false
    });
  }

  viewHomebrew() {
    this.setState({
      viewMyCollection: false,
      viewHomebrew: true
    });
  }

  render() {
    let currentView = (
      <ROMSourceSelector
        viewMyCollection={() => {
          this.viewMyCollection();
        }}
        viewHomebrew={() => {
          this.viewHomebrew();
        }}
      />
    );

    let backButton = <div />;
    if (this.state.viewMyCollection || this.state.viewHomebrew) {
      console.log("hi");
      backButton = (
        <button class="ROMLoader__back" onClick={() => this.goToPreviousView()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
          </svg>
        </button>
      );
    }

    return (
      <div
        className={this.props.show ? "ROMLoader ROMLoader--show" : "ROMLoader"}
      >
        <h1>ROM Loader</h1>

        <button class="ROMLoader__close" onClick={() => this.hideROMLoader()}>
          X
        </button>

        {backButton}

        {currentView}
      </div>
    );
  }
}
