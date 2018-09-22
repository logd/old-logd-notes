import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TextInput from './TextInput';

describe("TextInput", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    xit('allows for typing in text', () => {
        // mount component, expect input to be ""
        // simulate entering text, expect text to match input
    });
})
