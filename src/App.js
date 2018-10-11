import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name:'Volvo', year: 2018},
      {name:'Mazda', year: 2014},
      {name:'Auidi', year: 2010},
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {

    const cars = this.state.cars

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
          >Change title</button>
        <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        />
      </div>
    );
  }
}

export default App
