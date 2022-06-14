import React from 'react';

class Timer extends React.Component {
	state = { time: 0 };

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState((prevState) => ({
				time: prevState.time + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>
				<p>Time class: {this.state.time} sec.</p>
			</div>
		);
	}
}

export default Timer;
