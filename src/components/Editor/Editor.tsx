import { Editor, EditorState } from 'draft-js';
import * as React from 'react';

// interface IState {
//     inputValue: string;
// }
class DraftEditor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    public render() {

        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }

    private onChange = (e: any) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
}

export default DraftEditor;
