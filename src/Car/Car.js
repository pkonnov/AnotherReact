import React from 'react'
// import Radium from 'radium'
import classes from './Car.css'

class Car extends React.Component{

  componetnWillReceiveProps(nextProps){
      console.log('car componetnWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log('car shouldComponentUpdate', nextProps, nextState)
      return nextProps.name.trim() !== this.props.name.trim()
  }

  componetnWillUpdate(nextProps, nextState){
      console.log('car componetnWillUpdate', nextProps, nextState)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('car getDerivedStateFromProps', nextProps, prevState)

    return prevState
  }

  componetnDidUpdate(){
      console.log('car componetnDidUpdate')
  }

  getSnapshotBeforeUpdate(){
    console.log('car getSnapshotBeforeUpdate');
  }

  componetnWillUnmount(){
      console.log('car componetnWillUnmount')
  }

  render(){
      console.log('car render')
      const inputClasses = [classes.input]
      if (this.props.name !== ''){
        inputClasses.push(classes.red)
      } else {
        inputClasses.push(classes.green)
      }

      if (this.props.name.length > 4){
        inputClasses.push(classes.bold)
      }

      const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
        ':hover': {
          border: '1px solid #aaa',
          boxShadow: '0 4px 15px 0 rgba(0,0,0,.25)',
          cursor: 'pointer'
        }
      }

      return (
        <div className={classes.Car} style={style}>
          <h3>Car name: {this.props.name}</h3>
          <p>Year: <strong>{this.props.year}</strong></p>
          <input
            type="text"
            value={this.props.name}
            onChange={this.props.onChangeName}
            className={inputClasses.join(' ')}
          />
          <button onClick={this.props.onDelete}>Delete</button>
        </div>
      )

  }
}


export default Car
