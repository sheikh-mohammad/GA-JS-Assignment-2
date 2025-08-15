// --------------------- Chapter 4 ----------------------

// Question 1
// var var1, var2, var3;

// Question 2
// Legal
// var legalOne;
// var legal2;
// var legal_three;
// var $legalFour;
// var legal5$;

// Illegal
// var illegal one;
// var 2illegal;
// var illegal-three;
// var @illegalFour;
// var illegal##;

// Question 3
// var rule1 = "numbers";
// var rule2 = "$";
// var rule3 = "_";
// var rule4 = "letter";
// var rule5 = "sensitive";
// var rule6 = "keywords";
// document.write("Variable names can only contain " + rule1 + ", " + rule2 + " and " + rule3 + " . " + "For example : $my_1stVariable");
// document.write("<br /> Variable must begin with a " + rule4 + ", " + rule2 + " or " + rule3 + " . " + "For example : $name, _name or name");
// document.write("<br /> Variable names are case " + rule5);
// document.write("<br /> Variable names should not be JS " + rule6);

// ------------------ Chapter 5 -----------------

// Question 1
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// Question 2 ( A )
// var num1 = 3;
// var num2 = 5;
// var result = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + result);

// Question 2 ( B )
// var num1 = 3;
// var num2 = 5;
// var result = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + result);

// Question 2 ( C )
// var num1 = 3;
// var num2 = 5;
// var result = num1 / num2;
// document.write("Quotient of " + num1 + " and " + num2 + " is " + result);

// Question 3
// var variable;
// document.write("Value after variable declaration is " + variable);
// variable = 5;
// document.write("<br /> Initial value: " + variable);
// variable++;
// document.write("<br /> Value after increment is: " + variable);
// variable = variable + 7;
// document.write("<br /> Value after addition is: " + variable);
// variable--;
// document.write("<br /> Value after decrement is: " + variable);
// variable = variable % 3;
// document.write("<br /> The remainder is: " + variable);

// Question 4
// var ticketPrice = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + 600*5 + "PKR");

// Question 5
// var num = 4;
// document.write("Table of " + num);
// document.write("<br/>" + num + "x" + "1" + "=" + 4 * 1);
// document.write("<br/>" + num + "x" + "2" + "=" + 4 * 2);
// document.write("<br/>" + num + "x" + "3" + "=" + 4 * 3);
// document.write("<br/>" + num + "x" + "4" + "=" + 4 * 4);
// document.write("<br/>" + num + "x" + "5" + "=" + 4 * 5);
// document.write("<br/>" + num + "x" + "6" + "=" + 4 * 6);
// document.write("<br/>" + num + "x" + "7" + "=" + 4 * 7);
// document.write("<br/>" + num + "x" + "8" + "=" + 4 * 8);
// document.write("<br/>" + num + "x" + "9" + "=" + 4 * 9);
// document.write("<br/>" + num + "x" + "10" + "=" + 4 * 10);

// Question 6
// var tempCelsius = 25;
// document.write(tempCelsius + "<sup>0</sup>C is " + ((tempCelsius * 9 / 5) + 32) + "<sup>o</sup>F");
// var tempFahrenheit = 70;
// document.write("<br />" + tempFahrenheit + "<sup>0</sup>F is " + ((tempFahrenheit - 32) * 5 / 9) + "<sup>o</sup>C");