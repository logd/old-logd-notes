// import { Editor, EditorState } from 'draft-js';
import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IState {
  text: string;
}
class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
  public render() {

    document.title = "Logd Note-Taking App";
    return (
      <div className="App">
        <h1>Quill Editor</h1>
        <div className="editor">
          <ReactQuill value={this.state.text}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }

  private handleChange(value: string) {
    this.setState({ text: value })
  }
}

export default App;
