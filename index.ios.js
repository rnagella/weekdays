'use-strict';
// Import some code we need
var React = require('react-native');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

// Create a react component
var Weekdays = React.createClass({
  render: function () {
    return <View style= {styles.container}>
      {this.days()}
    </View>
  },
  days: function () {
    var daysItems = [];

    for (var i = 1; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems;
  }
});

// Style the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1, // fill up the entire screen ex: 100%width, 100% height
    justifyContent: 'center', // Move stuff height wise
    alignItems: 'center', // Move stuff width wise
  },
});


// Show the react component on the screen
// once per app
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});
