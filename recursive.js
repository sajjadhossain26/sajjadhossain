// function recursive(num){
//     var final=1;
//     for(var i=1; i<=num; i++){
//         final=final*i
//     }return final
    
// }var result=recursive(5);
// console.log(result)

function factorial(num){
    var element=1;
    for(var i=1; i<num; i++){
        element=element*i;
    }return element;
}var final=factorial(5);
console.log(final)