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
// var result = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + result);

// Question 2 ( B )
// var result = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + result);

// Question 2 ( C )
// var result = num1 / num2;
// document.write("Quotient of " + num1 + " and " + num2 + " is " + result);
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

// Question 7
// var item1 = 650;
// var item2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (item1 * quantityItem1) + (item2 * quantityItem2) + shippingCharges;
// document.write("Price of item 1 is ", item1);
// document.write("<br /> Quantity of item 1 is ", quantityItem1);
// document.write("<br /> Price of item 2 is ", item2);
// document.write("<br /> Quantity of item 2 is ", quantityItem2);
// document.write("<br /> Shipping Charges ", shippingCharges);
// document.write("<br /> <br /> Total cost of your order is ", totalCost);
// Question 8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Total marks: ", totalMarks);
// document.write("<br /> Marks obtained: ", marksObtained);
// document.write("<br /> Percentage: ", percentage, "%");
// Question 9
// var dollars = 10;
// var riyals = 25;
// document.write("Total Currency in PKR: ", (dollars * 104.80) + (riyals * 28));

// Question 10;
// var num = 3;
// document.write("Result: ",((num + 5)*10)/2);

// Question 11
// var currentYear = 2016;
// var birthYear = 1992;

// document.write("Current Year: ", currentYear);
// document.write("<br /> Birth Year: ", birthYear);
// document.write("<br /> Your Age: ", currentYear - birthYear);

// Question 12
// var r = 20;

// document.write("Radius of a circle: ", r);
// document.write("<br /> The circumference is: ", 2 * 3.142 * r);
// document.write("<br /> The area is: ", 3.142 * (r * r));

// Question 13
var favouriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 63