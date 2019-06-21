import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './pomodoro.css';

const mapStateToProps = (store) => ({
  addTasks: store.tasks.addTasks
});

const mapDispatchToProps = dispatch => ({
  // addTask: (info) => {
  //   dispatch(addTask(info));
  // },
});

class Pomodoro extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: 1500,
      interval: false,
      running: false,
    };
  }

  handleStart = () => {
    if(!this.state.running){
      setInterval(() => {
        this.handleDecrement();
      }, 1000);
    }
    this.setState(prevState => ({
      running: !prevState.running,
    }))
  }

  handlePause = () => {
    clearInterval(this.state.running);

    this.setState(prevState => ({
      running: !prevState.running,
      ...prevState.pause && {
        pause: !prevState.pause
      },
    }))
  }

  handleReset = () => {

  }

  handleDecrement = () => {
    const { running, pause } = this.state
    let { time } = this.state;

    if( running && !pause ) {
      if(time > 0) {
        this.setState({
          time: time - 1,
        })
      }
      if(time === 0){
        this.setState({
          time: !this.state.interval ? 300 : 1500,
          interval: !this.state.interval,
        })
      } return null;
    } else return null;
  }

  renderFormatTime = () => {
    const { time } = this.state;
    const minutos = Math.floor(time % 3600 / 60);
    const segundos = Math.floor(time % 3600 % 60);

    return `${minutos < 10 ? "0" : ''}${minutos} : ${segundos < 10 ? '0' : ''}${segundos}`
  }

  render() {
    return (
      <div className="Todo">
        <div>
          <span>{this.renderFormatTime()}</span> 
        </div>
        <div id="buttons">
          <button 
            className="btn"
            onClick={this.handleStart}
          >
          Start
          </button>
          <button
            className="btn"
            onClick={this.handlePause}
          >
          Pause
          </button>
          <button 
            className="btn"
            onClick={this.handleReset}
          >
          Reset
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
