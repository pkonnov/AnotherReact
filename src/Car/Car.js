import React from 'react'
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component{


  render(){

      const inputClasses = [classes.input]
      if (this.props.name !== ''){
        inputClasses.push(classes.red)
      } else {
        inputClasses.push(classes.green)
      }

      if (this.props.name.length > 4){
        inputClasses.push(classes.bold)
      }

      return (
        <React.Fragment>
          <h3>Car name: {this.props.name}</h3>
          <p>Year: <strong>{this.props.year}</strong></p>
          <input
            type="text"
            value={this.props.name}
            onChange={this.props.onChangeName}
            className={inputClasses.join(' ')}
          />
          <button onClick={this.props.onDelete}>Delete</button>
        </React.Fragment>
      )
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car)
