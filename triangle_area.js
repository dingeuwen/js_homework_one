// This program should be able to calculate the area of a triangle with from the perimiter. 
// Bonus: Have the program have a form that asks for the inputs. 
// Bonus 2: Have the program calculate the lengths of the third side from the lengths of two sides. 


function area() {
    var sideA = parseFloat(prompt("Enter the length of the first side of the triangle", ""));
    var sideB = parseFloat(prompt("Enter the length of the second side of the triangle", ""));
    var angle = parseFloat(prompt("Enter the angle in degrees between these two sides (inbetween 0 and 180, exclusive)", ""));
    var cos_angle = Math.cos(angle * (Math.PI/180));
    var sin_angle = Math.sin(angle * (Math.PI/180));
    var sideC = Math.sqrt((sideA * sideA) + (sideB * sideB) - (2 * sideA * sideB * cos_angle));
    var s = (sideA + sideB + sideC) / 2;

    var ans1 = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    var ans2 = (0.5)  * sideA * sideB * sin_angle;
    console.log("Side A is of length " + sideA + ", side B is of length " + sideB + ", side C is of length " + sideC);
    console.log("Area via Heron's forumla is " + ans1 + ".");
    console.log("Area via sine rule is " + ans2 + ".");
}


