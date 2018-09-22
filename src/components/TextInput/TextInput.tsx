import * as React from 'react';

interface IState {
    inputValue: string;
}
class TextInput extends React.Component<{}, IState> {
    public state: IState = {
        inputValue: "",
    };
    public render() {

        return (
            <input
                value={this.state.inputValue}
                placeholder={"Write something..."}
                onChange={this.onChange}
            />
        );
    }

    private onChange = (e: any) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
}

export default TextInput;
