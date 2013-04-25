// Given an array of my favorite things, this code should then spit back out: 
// (for example):
// My #1 favorite baseball team is the New York Mets. 
// My #2 favorite baseball team is the San Francisco Giants. 

var favorite_things = ["sleeping", "eating", "programming", "traveling", "dreaming", "creating", "solving problems"];

function favorite_translation(array) {
  for (var i = 0; i < array.length; i += 1) {
    count = i + 1;
    console.log("My #" + count + " favorite thing is " + array[i] + ".");
  }
}