'use-strict';
// Import some code we need
var React = require('react-native');
var Text = React.Text;
// var StyleSheet = React.StyleSheet;

// Create our component
var DayItem = React.createClass({
	render: function () {
		return <Text style={this.style()}>
			{this.props.day}
		</Text>
	},
	style: function () {
		return {
			color: this.color(),
			// fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color: function () {
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(0, 0, 0, ' + opacity + ')';
	},
	// fontWeight: function() {
	// 	var weight = 7 - this.props.daysUntil;
	// 	return weight * 100;
	// },
	fontSize: function () {
		return 60 - 6 * this.props.daysUntil;
	},
	lineHeight: function () {
		return 70 - 4 * this.props.daysUntil;
	}
})

// Style our component
// var styles = StyleSheet.create({
// 	day: {
// 		fontSize: 18,
// 		color: '#0000FF',
// 	}
// })

// Make this code available else where
module.exports = DayItem;
