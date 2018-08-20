import * as firebase from "firebase";
import * as React from "react";
import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
  constructor(props: any) {
    super(props);

    // Firebaseの初期化
    const config = {
      apiKey: "AIzaSyCssqXrGArSzeAqqQ7U2yKgputcCozXVzQ",
      authDomain: "my-custom-info.firebaseapp.com",
      databaseURL: "https://my-custom-info.firebaseio.com",
      messagingSenderId: "948285868812",
      projectId: "my-custom-info",
      storageBucket: "my-custom-info.appspot.com"
    };
    firebase.initializeApp(config);
  }

  public componentDidMount() {
    firebase
      .database()
      .ref()
      .once("value", snap => {
        console.log(snap.val());
      });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
