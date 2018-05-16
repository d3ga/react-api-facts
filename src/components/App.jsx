import React, { Fragment } from "react";
import Axios from "axios";

import Fact from "./Fact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.getFacts();
  }

  getFacts() {
    Axios.get("http://localhost:8800/facts")
      .then(response => {
        this.setState(state => {
          state.data = response.data;
          console.log("Axios", response);
          return state;
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Fragment>
        {Object.keys(this.state.data).map(uuid => (
          <Fact key={uuid} data={this.state.data[uuid]} />
        ))}
      </Fragment>
    );
  }
}

export default App;
