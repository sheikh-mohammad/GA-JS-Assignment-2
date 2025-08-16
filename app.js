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
// var favouriteSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;

// document.write("Favourite Snack: ", favouriteSnack);
// document.write("<br /> Current age: ", currentAge);
// document.write("<br /> Estimated Maximum Age: ", maxAge);
// document.write("<br /> Amount of snacks per day: ", amountPerDay);
// document.write("<br /> You will need ", (maxAge - currentAge) * 3, " ", favouriteSnack, " to last you until the ripe old age of ", maxAge);

// -------------- Chapter 6 - 9 ------------------

// Question 1
// var a = 10;

// document.write("Result:")
// document.write("<br /> The value of a is: ", a);
// document.write("<br /> .............................................");
// document.write("<br /> <br /> The value of ++a is ", ++a);
// document.write("<br /> Now the value of a is: ", a);
// document.write("<br /> <br /> <br /> The value of a++ is: ", a++);
// document.write("<br /> Now the value of a is: ", a);
// document.write("<br /> <br /> <br /> The value of --a is: ", --a);
// document.write("<br /> Now the value of a is: ", a);
// document.write("<br /> <br /> <br /> The value of a-- is: ", a--);
// document.write("<br /> Now the value of a is: ", a);

// Question 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// --a; ( Pre-decrement [a is 2] first minus and then use so { a = 1 } )
// --a - --b; ( Pre-decrement [b is 1] first minus and then use so { b = 0 } and a was 1 and b is 0, 1 - 0 )
// --a - --b + ++b; ( Pre-increment [b is 0] first sum and then use so { b is 1 }  and a was 1, b was 0 and b is now 1, 1 - 0 + 1 )
// --a - --b + ++b + b--; ( Post-decrement [b is 1] first use and then sum so { b will be 1 no change, change will be on next step } and a was 1, b was 0, b was 1, b now 1 [decrement on next step], 1 - 0 + 1 + 1 )
// 1 - 0 + 1 + 1
//  1 + 1 + 1 = 3

// document.write("a is ", a);
// document.write("<br/> b is ", b); // b is 0 becuase of post decrement
// document.write("<br /> result is ", result);

// Question 3
// var name = "Sheikh Mohammad";
// document.write("Hey ", name, "! Welcome to Our Website");

// Question 4
// var num = 5;
// document.write("Table of ", num);
// document.write("<br /> ", num, " X 1 = ", num * 1);
// document.write("<br /> ", num, " X 2 = ", num * 2);
// document.write("<br /> ", num, " X 3 = ", num * 3);
// document.write("<br /> ", num, " X 4 = ", num * 4);
// document.write("<br /> ", num, " X 5 = ", num * 5);
// document.write("<br /> ", num, " X 6 = ", num * 6);
// document.write("<br /> ", num, " X 7 = ", num * 7);
// document.write("<br /> ", num, " X 8 = ", num * 8);
// document.write("<br /> ", num, " X 9 = ", num * 9);
// document.write("<br /> ", num, " X 10 = ", num * 10);

// Question 5
// var sub1 = "English";
// var sub2 = "Math";
// var sub3 = "Urdu";
// var totalMarks = 100 + 100 + 100;
// var sub1Marks = 54;
// var sub2Marks = 54;
// var sub3Marks = 48;
// var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;

// document.write("<table> <tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>");
// document.write("<tr>", "<td>", sub1, "</td>", "<td>", 100, "</td>", "<td>", sub1Marks, "</td>", "<td>", (sub1Marks / 100) * 100, "%", "</td>", "</tr>");
// document.write("<tr>", "<td>", sub2, "</td>", "<td>", 100, "</td>", "<td>", sub2Marks, "</td>", "<td>", (sub2Marks / 100) * 100, "%", "</td>", "</tr>");
// document.write("<tr>", "<td>", sub3, "</td>", "<td>", 100, "</td>", "<td>", sub3Marks, "</td>", "<td>", (sub3Marks / 100) * 100, "%", "</td>", "</tr>");
// document.write("<tr>", "<th></th> <th>", totalMarks, "</th>", "<th>", sub1Marks + sub2Marks + sub3Marks, "</th>", "<th>", (obtainedMarks / totalMarks) * 100, "%</th>");