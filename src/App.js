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
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (newTitle) => { // changes title through <button/>
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    let cars = null
    if (this.state.showCars){
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
          >Toggle Cars</button>
        {cars}
      </div>
    );
  }
}

export default App
