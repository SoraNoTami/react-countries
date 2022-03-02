import React from 'react';
import axios from 'axios';
import { Button } from './components/Button.jsx'
import { Card } from './components/Card.jsx'
import bootstrap from 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }
  }

  componentDidMount = () => {
    axios("https://restcountries.com/v3.1/name/france").then((resultat) => {
      // console.log(resultat)
      // console.log(resultat.data[0].region)
      this.setState({ name: resultat.data[0].name.common })
      this.setState({ capital: resultat.data[0].capital[0] })
      this.setState({ flag: resultat.data[0].flag })
      this.setState({ population: resultat.data[0].population })
      this.setState({ region: resultat.data[0].region })
    })
  }

  getCountry = (country) => {
    axios("https://restcountries.com/v3.1/name/" + country).then((resultat) => {
      this.setState({ name: resultat.data[0].name.common })
      this.setState({ capital: resultat.data[0].capital[0] })
      this.setState({ flag: resultat.data[0].flag })
      this.setState({ population: resultat.data[0].population })
      this.setState({ region: resultat.data[0].region })
    })
  }



  render() {
    return (
      <div>
        <Button onClick={this.getCountry}>France</Button>
        <Button onClick={this.getCountry}>Brazil</Button>
        <Button onClick={this.getCountry}>Croatia</Button>
        <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag} population={this.state.population} region={this.state.region} />
      </div>
    )
  }
}

export default App;
