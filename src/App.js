import { Component } from "react";
import Voivodeship from "./Voivodeship";
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

class App extends Component{

  state = {
    error: null,
    isLoaded: false,
    data:[]
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/voivodeships/all")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ 
          isLoaded: true, 
          data
        })
      });
  }

    render() {
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return(
          <div>
              <Button variant="dark" disabled>
                  <Loader
                  type="Circles" 
                  color="#00BFFF" 
                  height={80}
                   width={80}
                  as="span"
                  variant="light"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  animation="border"/>
                    Loading...
              </Button>
          </div>)
      } else {
      return (
        <div>
              {this.state.data.map(voivodeship => <Voivodeship info={voivodeship}/>)}
        </div>
      );
    }
  }
}

export default App;
