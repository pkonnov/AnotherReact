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

  changeTitleHandler = (newTitle) => { // changes title through <button/>
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) =>{ // changes title through <input/>
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}/>

        <button
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
          >Change title</button>

        { this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        }) }
        
      </div>
    );
  }
}

export default App
