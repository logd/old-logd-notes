import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IState {
  text: any;
  [key: string]: string | null;
}
class Home extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
  }
  public componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.autofocus();
  }

  public componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }
  public render() {
    // document.title = "Logd Note-Taking App";
    return (
      <div data-cy="homepage">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder={"Write something..."}
          />
        </div>
      </div>
    );
  }

  private handleChange(value: string) {
    this.setState({ text: value });

    localStorage.setItem("text", JSON.stringify(value));
  }
  private hydrateStateWithLocalStorage() {
    // for all items in state
    for (const key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value as any);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  private saveStateToLocalStorage() {
    // for every item in React state
    // tslint:disable-next-line:forin
    for (const key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  private autofocus = () => {
    const div: any = document.getElementsByClassName("ql-editor")[0];
    setTimeout(() => {
      div.focus();
    }, 0);
  };
}

export default Home;
