// var number=[324,54, 65,67,34,34,445]
// for(var i=0; i<number.length; i++){
//     var element=number[i];
//     console.log(element)
// }

// let marks=[12,34,64,32,54,23,75,32];
// for(var i=0; i<marks.length; i++){
//     console.log(marks[i])
// }

// function add(number1,number2){
//     var number=number1+number2;
//     return number;
// }result=add(20,20);
// console.log(result)
// console.log(" hello world!");
// console.log(" hello world1!");

// var result1=add(40,40);
// console.log(result1)

function largestNumber(number){
    larger=number[0];
    for(var i=0; i<number.length; i++){
       var element=number[i]
      if(element>larger){
        larger=element
      }
    }
    return larger;
}var array =[34,34,234,76,564,45]
var final=largestNumber(array);
console.log(final)