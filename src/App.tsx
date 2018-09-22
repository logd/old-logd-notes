import * as React from 'react';
import TextInput from './components/TextInput/TextInput';

class App extends React.Component {
  public render() {

    document.title = "Logd Note-Taking App";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Logd Note-taking app</h1>
        </header>
        <div>Input: <TextInput /></div>
      </div>
    );
  }
}

export default App;
