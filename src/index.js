import * as React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Functional component
const MyHello = props => {
  return <h2>Hello, {props.name}</h2>;
};

// Functional component using ES6 arrow function expression
const MyHello2 = props => <h2>Hello, {props.name}</h2>;

// Class-based component
class MyHello3 extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}

// Class-based component with state
class MyHello4 extends React.Component {
  state = { counter: 0 };
  // Call setState to update the component's state
  incrementCounter = () => {
    this.setState(state => ({
      ...state,
      counter: state.counter + 1
    }));
  };
  render() {
    return (
      <React.Fragment>
        <h2>
          Hello, {this.props.name} {this.state.counter} times
        </h2>
        <button onClick={this.incrementCounter}>Say it again</button>
      </React.Fragment>
    );
  }
}

// Class-based component with lifecycle methods
class MyHello5 extends React.Component {
  componentDidMount() {
    // The component is mounted - fetch the data from the server
    // ...
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // The component is updated - update the values
    // ...
  }
  componentWillUnmount() {
    // The component is about to be unmounted - clean up
    // ...abstract
  }
  render() {
    // ...
  }
}

// Class-based component with a ref to a DOM element
class MyHello6 extends React.Component {
  constructor(props) {
    super(props);
    // Create a Ref for the button element
    this.inputRef = React.createRef();
  }

  // Focus on the textInput DOM element
  focusOnInput = () => this.inputRef.current.focus();

  render() {
    return (
      <div>
        <label htmlFor="textInput">Enter text</label>
        <input id="textInput" type="text" ref={this.inputRef} />
        {/* Move the focus to the text input when the button is clicked */}
        <button onClick={this.focusOnInput}> Focus on input control</button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <h1>Functional and class-based components</h1>
      <MyHello name="Sergey" />
      <MyHello2 name="Sergey" />
      <MyHello3 name="Sergey" />
      <MyHello4 name="Sergey" />
      <MyHello6 />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
