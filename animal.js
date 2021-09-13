// // // var dept=21;
// // // var animal=0;
// // // if(dept<=10){
// // //   animal=dept*50;
// // // }else if(dept<=20){
// // //     var firstPart=10*50;
// // //     var remaining=dept-10;
// // //     var secondPart=remaining*100;
// // //     animal=firstPart+secondPart;
// // // }else{
// // //     var firstPart=10*50;
// // //     var secondPart=10*100;
// // //     var remaining=dept-20;
// // //     var thirtPart=remaining*300;
// // //     animal =firstPart+secondPart+thirtPart;
// // // }    console.log(animal)

// // function animalCal(dept){
// // var animal=0;
// // if(dept<=10){
// //   animal=dept*50;
// // }else if(dept<=20){
// //     var firstPart=10*50;
// //     var remaining=dept-10;
// //     var secondPart=remaining*100;
// //     animal=firstPart+secondPart;
// // }else{
// //     var firstPart=10*50;
// //     var secondPart=10*100;
// //     var remaining=dept-20;
// //     var thirtPart=remaining*300;
// //     animal =firstPart+secondPart+thirtPart;
// // }   return animal;
// //   } var total=animalCal(20);
// //   console.log(total)
  
// var dept=21;
// animal=0;
// if(dept<=10){
//  animal=dept*50;
// }else if(dept<=20){
//   firstAnimal=10*50;
//   remaining=dept-10;
//   secondAnimal=remaining*100;
//   animal=firstAnimal+secondAnimal;
// }else{
//   firstAnimal=10*50;
//   secondAnimal=10*100;
//   remaining=dept-20;
//   thirdAnimal=remaining*300;
//   animal=firstAnimal+secondAnimal+thirdAnimal;
// }console.log(animal)
function checkAnimal(dept){
  animal=0;
if(dept<=10){
  animal=dept*50;
}else if(dept<=20){
  var firstPart=10*50;
  var remaining=dept-10;
  var secondPart=remaining*100;
  animal=firstPart+secondPart;
}else{
  var firstPart=10*50;
  var secondPart=10*100;
  var remaining=dept-20;
  var thirdPart=remaining*300;
  animal=firstPart+secondPart+thirdPart;
}return animal;
}

var final=checkAnimal(22);
console.log(final)