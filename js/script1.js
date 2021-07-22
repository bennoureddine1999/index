//comments can make code readable//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
//comments can make code readable, easy to reuse and informative//
/*var string ="color "
var boolean =true
var x 
var y = null

console .log(typeof(string))
console .log(typeof(x))
console.log(typeof(y))
console.log(typeof(boolean))


var a
var i5
var True
var x

 var firstName
 var lastName
 var maritalStatus
 var country
 var age

var firstName,lastName,maritalStatus,country, age

var myAge= 23
var yourAge=32


console.log ("I am" , myAge,"years old.")
console.log ("You are" , yourAge,"years old.")*/

/*var B =prompt("donne la valleur de la bas",)
B=parseFloat(B)
    console.log(B)
var H=prompt("donne la valleur de la H",)
H=parseFloat(H)
console.log(H)
 area=B*H*0.5
 alert (area)


var A=Number =prompt("inter side A")
A=parseFloat(A)
console.log(typeof A)
var B=Number=prompt("inter side B")
B=parseFloat(B)
console.log(typeof B)
var C=Number=prompt("inter side C")
C=parseFloat(C)
console.log(typeof C)
perimeter = A+B+C
alert( perimeter)*/

/*var length =prompt("inter length of rectangle")
length=parseFloat(length)
console.log(length)
var width=prompt("inter width of rectangle")
width=parseFloat(width)
console.log(width)
area=length*width
alert(area)
perimeter2 = 2*(length + width)
alert(perimeter2)*/

/*var r=prompt("inter r")
r=parseFloat(r)
console.log(r)
var pi=3.14
area=r**2*pi
alert(area)
circumference = 2 *pi * r
alert(circumference)*/

/*var age=prompt("enter your age")
age=parseFloat(age)
console.log(age)
var yourage=function(age){
return 18-age}

if (age>=18){
    alert("You are old enough to drive")
}else{
   alert(`you need to wait ${yourage(age)} years to turn 18` )
}*/
/*var yourage = prompt("inter your age:");
yourage = parseFloat(yourage);
myage = 22;
console.log(myage, yourage);
if (yourage > myage) {
  alert("you are older for me");
} else {
  if (yourage < myage) {
    alert("you are younger for me");
  } else {
    alert("we are in the sam age");
  }
}*/

/*var number=prompt("inter a number")
number=parseFloat(number)
var numb=function(rest){
return rest%2     
}

if (numb(number)==0){
    alert("the number even")

}else{
   alert(" the number not even")
}*/

/*var grade=prompt("inter your grade number")
grade=parseFloat(grade)

if (90<=grade&&grade<=100){
    alert("your grade is A")
}else{
    if(70<=grade&&grade<=89){
        alert("your grade is B")
    }else{
        if(60<=grade&&grade<=69){
            alert("your grade is c")
        }else{
            if(50<=grade&&grade<=59){
                alert("your grade is D")
            }else{
                if(0<=grade&&grade<=49){
                    alert("your grade is F")
                }else{
                    alert("error")
                }

            }
        }
    }
}*/

/*var month = prompt("inter the month");
month = month.toUpperCase();
if (month == "SEBTEMBER" ||month == "OCTOBER" ||month == "NOVEMBER") {
  alert("the season is Autumn");
} else {
  if (month == "DECEMBER" || month =="JANUARY" ||month == "FEBRUARY") {
    alert("the season is Autumn");
  } else {
    if (month == "MARCH" ||month == "APRIL" ||month == "MAY") {
      alert("the season is Spring");
    } else {
      if (month == "JUNE" ||month == "JULY" ||month == "AUGUST") {
        alert("the season is Summer");
      } else {
        alert("errore");
      }
    }
  }
}*/

// var fullName=function(){
//     console.log("noureddine benaoumeur")
// }
/*var fullName=function(firstName,lastName){
    console.log(firstName+lastName)
}

fullName("akram","moussaoui")*/
/*var number=function(num1,num2){
console.log(num1,num2)
return num1+num2}

number(1,5)
console.log(number(1,5))*/

/*var perimeter=function(width,length){
    consol.log(width,length)
    return 2*(width+length)
}
perimeter(3,5)
console.log(perimeter(3,5))*/

/*function BMI(weight,height){
  if(30>weight||weight>3)return "weight must be in kg"
  if(30>height||height>3)return "height must be in kg"
  var bmi=weight/(height**2);
  return bmi ;
}
var weight=prompt ("give your weight")
weight=parseFloat(weight)

var height=prompt("give your height")
height=parseFloat(height)

var bmi=BMI(weight,height)


if(typeof bmi=="number"){
  if(bmi<=18.5){
    alert("Underweight")
  }else{}

}*/

/*for(var i=0;i<11;i++){
  console.log(i);
}

var i=0
while (i<11){
  console.log(i)
  i++
}
var i=0
do {
  console.log(i)
  i++
} while (i<11);*/

/*for( var i=0;i<11;i++){
  console.log(i+" x "+i+" = "+i*i)

}*/

/*for( var i=0;i<11;i=i+2){
  console.log(i+" x "+i+" = "+i*i)

}*/

/*for( var i=1;i<11;i=i+2){
  console.log(i+" x "+i+" = "+i*i)

}*/

/*for( var i=0;i<11;i++){
  
  console.log(i+" x "+i+" = "+r)
  
}*/
// var r=1
// for( var i=1; i<6; i=i+1){
//   r=i*r
//   console.log(i)

// } console.log (r)

/*for(var i=0;i<11;i++){
  console.log()
}*/

/*function tablemenu(num){
  for(var i=1;i<11;i++){
    console.log(i+"*"+num+"="+i*num);
  }
}
tablemenu(5);*/

/*var sum=0;
for(var i=0; i<101;i++){
  if(i%2==1){
    continue
  }
  sum=sum+1
}
console.log(sum)*/

//exo5

/*var number=[1];
delete number[0];
console.log(number);*/

/*var Name=[2,6,4,18,10,];


console.log(Name.length-1)
console.log(Name[Name.length-1],Name[2],Name[4])

console.log(Name[Math.round((Name.length-1)/2)]);*/

/*var mixedDataTypes=[12,"four",true,8,3,78];

console.log(mixedDataTypes.length);*/

/*var itCompanies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", 
  "Oracle ", "Amazon"];

  console.log(itCompanies);
  console.log(itCompanies[0])
  console.log(itCompanies[itCompanies.length-1])
  console.log(itCompanies [Math.round((itCompanies.length-1)/2)])*/

/*exo 5
  var countries = [
    'Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'
]

console.log(countries);



var countrieslength=[] ;
for(var i=0;i<countries.length;i++){
countrieslength.push(countries[i].length)
}
console.log(countrieslength);

var contrieslatter=[]
for(var r=0;r<countries.length;r++){
  contrieslatter.push(countries[r].substring(0,3).toUpperCase() )
  }
  console.log(contrieslatter);

 var contriesfinal=[] ;
 for(var s=0;s<countries.length;s++){
  contriesfinal.push(countries[s], contrieslatter[s], countrieslength[s]);
 }
 console.log(contriesfinal);*/

/*obj
 var obj={
   name :"akram",
   age:34,
   great : function(){
     return console.log("bonjor"+ this.name)
   }
 }

 obj["great"];

 for (var value in contries){
   console.log (value)
 }
 for (var value of contries){
  console.log (value)
}*/

//exo7

/*var dog={}
console.log ("dog") 
dog.name="noureddine";
dog.legs="32";
dog.color="blue";
dog.age="28";

console.log(dog.name,dog.legs,dog.color,dog.age)
dog,breed=""

// var keys=Object.keys(obj);
// var values=Object.values(obj);
// console.log("keys=",keys);
// console.log("values=",values);

/*ar users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
var keys = Object.keys(users);
console.log("keys=", keys);

var values = Object.values(users);
console.log("values=", values);

for (var value of values) {
  console.log(value.skills);
  console.log(value.skills.length);
}
var values = Object.values(users);
var keys = Object.keys();
var position;
var max = 0;
for (var i = 0; i < values.length; i++) {
  if (values[i].skills.length < max) {
    max = values[i].skills.length;
    position = i;
  }
}
console.log(max);
console.log(position);
console.log(keys[position]);*/

/*var numbers = [1, 2, 3];
function minMax(x) {
  return [Math.min(...x), Math.max(...x)];
}
console.log(minMax(numbers));*/

/*var num1;
var num2;
function isSameNum(num1, num2) {
  if (num1 == num2) {
    return;
  } else {
    console.log("false");
  }
}
isSameNum(32, 2);*/

/*var arr = [56, "name", "5"]; //[56, "name", "5",56,56]
function integers(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(integers([56, "name", 5]));*/

/*function getAbsSum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + Math.abs(arr[i]);
  }
  return sum;
}
console.log(getAbsSum([4, -1, 5]));*/

/*function countTrue(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      sum = sum + 1;
    }
  }
  return sum;
}
console.log(countTrue(["false"]));*/
/*inkLevels({
  cyan: 23,
  magenta: 12,
  yellow: 10,
});

inkLevels({
  cyan: 432,
  magenta: 543,
  yellow: 777,
});

inkLevels({
  cyan: 700,
  magenta: 700,
  yellow: 0,
});
function inkLevels(object) {
  var keys = Object.keys(object);
  console.log("keys=", keys);

  var values = Object.values(object);
  console.log("values=", values);

  console.log(Math.min(...values));

  return;
}*/

/*function objectToArray(obj) {
  var keys = Object.keys(obj);
  console.log("keys=", keys);

  var values = Object.values(obj);
  console.log("values=", values);
  var liste = [];
  for (var s = 0; s < values.length; s++) {
    liste.push([keys[s], values[s]]);
  }
  console.log(liste);
}

objectToArray({
  D: 1,
  B: 2,
  C: 3,
});*/

/*getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]);
getBudgets([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]);

function getBudgets(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].budget;
  }
  console.log("sum of people's budget=", sum);
  return;
}*/

/*function afterNYears(names, n) {
  var n;
  n = Math.abs(n);
  var keys = Object.keys(names);
  var values = Object.values(names);
  var result = {};
  for (i = 0; i < values.length; i++) {
    result[keys[i]] = values[i] + n;
  }

  console.log(result);

  return result;
}
afterNYears(
  {
    Joel: 32,
    Fred: 44,
  },
  -4
);*/

/*const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (GUEST_LIST[name]) {
    alert("Hi! I'm" + [name] + ", and I'm from " + GUEST_LIST[name]);
  } else {
    alert("Hi! I'm a guest.");
  }
  return name;
}
greeting("Karla");*/

/*function getRealFloor(n) {
  if (n=) {
    return n;
  }
  if (n > 0 && n < 13) {
    return n - 1;
  }else{
    return n
  }
}
getRealFloor();*/
