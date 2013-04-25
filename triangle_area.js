// This program should be able to calculate the area of a triangle with from the perimiter. 
// Bonus: Have the program have a form that asks for the inputs. 
// Bonus 2: Have the program calculate the lengths of the third side from the lengths of two sides. 


var triangle = {
	sideA: 30,
	sideB: 40,
	sideC: 50
};

function area(triangle) {
  var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  return Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
}