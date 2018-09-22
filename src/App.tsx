import { Editor, EditorState } from 'draft-js';
import * as React from 'react';

class App extends React.Component<{}, any> {
  public onChange: any;
  constructor(props: any) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState: any) => this.setState({ editorState });
  }
  public render() {

    document.title = "Logd Note-Taking App";
    return (
      <div className="App">
        <h1>Draft.js Editor</h1>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
