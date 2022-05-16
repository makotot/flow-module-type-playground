// @flow
import './App.css';
import React from "React";
import pkg from 'my-pkg'

function App(): React$Element<"div"> {
  const packageName: string = pkg.name
  return (
    <div className="App">
      {packageName}
    </div>
  );
}

export default App;
