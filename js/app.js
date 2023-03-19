const k = 3
const machine = new kNear(k)

// training - todo: meerdere voorbeelden voor cats en dogs nodig!
machine.learn([11, 5, 10], 'cat')

// predicting
let prediction = machine.classify([7, 7, 7])
console.log(`I think it's a ${prediction}`)



// var generator = require('knear');
// var k = 3; //k can be any integer
// var machine = new kNear(k);

// machine.learn([-1,2,3],'good');
// machine.learn([0,0,0],'good');
// machine.learn([10,10,10],'bad');
// machine.learn([9,12,9],'bad');

// machine.classify([1,0,1]);
// //returns 'good'

// machine.classify([11,11,9]);
//returns 'bad'