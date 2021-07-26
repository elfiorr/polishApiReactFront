import { Component } from "react";

class App extends Component{

    render() {
      return (
        <div>
          <p>-------------</p>
          <p>{this.props.info.id}</p>
          <p>{this.props.info.name}</p>
        </div>
      );
    }

}

export default App;
