import React, { Component } from 'react'
import './App.scss'
import Car from './Car/Car'

class App extends Component {

  constructor(props){
    
    super(props)
    this.state = {
      cars: [
        {name:'Volvo', year: 2018},
        // {name:'Mazda', year: 2014},
        // {name:'Auidi', year: 2010},
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  onChangeName(name, index) {
    const car  = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars] // this.state.cars.concat() // old // clone array
    cars[index] = car
    this.setState({
      cars
    })
  }

  // обычные функции создают свой контекст,
  // стрелочные не создают контекст, а пользуются текущим line7

  deleteHandler(index){
    const cars = this.state.cars.concat()
    cars.splice(index,1) // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.setState({cars})
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  componentWillMount(){
    console.log('app componentWillMount')
  }

  componentDidMount(){
    console.log('app componentDidMount')
  }

  render() {
    console.log('render');
    let cars = null
    if (this.state.showCars){
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div className="App">
        <div className="textCentr">

          <h1>{this.state.pageTitle}</h1>
          <h2>{this.props.title}</h2>

          <button
            className={'AppButton'}
            onClick={this.toggleCarsHandler}
            >Toggle Cars</button>

        </div>

        <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
          {cars}
        </div>
      </div>
    );
  }
}

export default App
