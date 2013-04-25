

function calculator(){
  var operand_one = prompt("Please enter the first number", "");
  var operand_two = prompt("Please enter the second number", "");
  var operator = prompt("Please enter either + - * or /", "");

  if (operator === "+") {
    answer = parseInt(operand_one, 10) + parseInt(operand_two, 10);
    return(operand_one + " plus " + operand_two + " equals " + answer);
  } else if (operator === "-") {
    answer = parseInt(operand_one, 10) - parseInt(operand_two, 10);
    return(operand_one + " minus " + operand_two + " equals " + answer);
  } else if (operator === "*") {
    answer = parseInt(operand_one, 10) * parseInt(operand_two, 10);
    return(operand_one + " multiplied by " + operand_two + " equals " + answer);
  } else if (operator === "/") {
    answer = parseInt(operand_one, 10) / parseInt(operand_two, 10);
    return(operand_one + " divided by " + operand_two + " equals " + answer);
  }
}