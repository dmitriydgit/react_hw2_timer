import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondsLeft: null,
			isPaused: false
		}
		this.tick = this.tick.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resumeTimer = this.resumeTimer.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.restoreTimer = this.restoreTimer.bind(this);
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000);
	}


	tick() {
		this.setState({ secondsLeft: this.state.secondsLeft + 1 })

	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	stopTimer() {
		this.setState({
			isPaused: true
		})

		clearInterval(this.timer)
	}

	resumeTimer() {
		this.setState({
			isPaused: false
		})
		this.timer = setInterval(this.tick, 1000);
	}

	restoreTimer() {
		this.setState({
			secondsLeft: 0
		})
	}

	render() {
		return (
			<div>

				<h4> <button onClick={this.stopTimer}>pause</button> <button onClick={this.resumeTimer}>start</button> Уже прошло {this.state.secondsLeft} секунд! <button onClick={this.restoreTimer}>restore	</button></h4>

			</div>
		)
	}
}




ReactDOM.render(<Timer />, document.getElementById('root'));
