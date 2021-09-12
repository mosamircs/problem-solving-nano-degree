var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
 S	18"	28"	8.13"
M	20"	29"	8.38"
L	22"	30"	8.63"
XL	24"	31"	8.88"
2XL	26"	33"	9.63"
3XL	28"	34"	10.13"
*/
if((shirtWidth>=18&&shirtWidth<20)&&(shirtLength>=28&&shirtLength<29)&&shirtSleeve>=8.13&& shirtSleeve<8.38)
{
    console.log("S");
}else if((shirtWidth>=20&&shirtWidth<22)&&(shirtLength>=29&&shirtLength<30)&&shirtSleeve>=8.38&& shirtSleeve<8.63)
{
    console.log("M");
}else if((shirtWidth>=22&&shirtWidth<24)&&(shirtLength>=30&&shirtLength<31)&&shirtSleeve>=8.63&& shirtSleeve<8.88)
{
    console.log("L");
}else if((shirtWidth>=24&&shirtWidth<26)&&(shirtLength>=31&&shirtLength<33)&&shirtSleeve>=8.88&& shirtSleeve<9.63)
{
    console.log("XL")  ; 
}else if((shirtWidth>=26&&shirtWidth<28)&&(shirtLength>=33&&shirtLength<34)&&shirtSleeve>=9.63&& shirtSleeve<10.13)
{
    console.log("2XL");
}else if(shirtWidth>=28&&shirtLength>=34&&shirtSleeve>=10.13)
{
    console.log("3XL");
}
else{
    console.log("NA");
}
