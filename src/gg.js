// const a=[1,2,3,4,5]

// // a[2]=9
// //  console.log(a)


// //  const a1="john"
// //  a1.indexOf(1)='d'

//  console.log(typeof a)

//  function removeduplicate(arr){
//     return arr.filter((ele,index)=>
//         arr.indexOf(ele)===index)
    


//  }
// const arr=[1,2,3,1,3]
// console.log(removeduplicate(arr))



// function remove(arr)
// {
//     return arr.filter((ele,index)=>ele%2!==0)
// }

// const arr=[1,2,3,2,1,1]
// console.log(remove(arr))




// function fun(string1){
//     let result=''
//    let str1= string1.split("_")
//    result=result+str1[0]
//    for(let i=1;i<=str1.length-1;i++){
  
//   result=result+ str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
//    }
//    return result
// }

// let string1="camel_case"
// console.log(fun(string1))


// function fun(string1){
   
// let result=''
 


 
// for(let i in string1){
   
//   if(string1.charAt(i)===string1.charAt(i).toUpperCase()){
//     result=result+"_"

//   }
//   result=result+string1.charAt(i).toLowerCase()
// }
// return result
// }

// let string1="camelCase"
// console.log(fun(string1))


// let arr=[1,2,3,4,1]
// let a=[]
// function fun(arr){
//     arr.forEach(element => {
//     if(!a.includes(element))
//       a.push(element)
    
//  });
// return a


// }

// console.log(fun(arr))

// function flattenArray(arr) {
//     let flattened = [];

//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             flattened = flattened.concat(flattenArray(item));
//         } else {
//             flattened.push(item);
//         }
//     });

//     return flattened;
// }

// let nestedArray = [1, [2, [3, 4], 5], 6];

// let flattenedArray = flattenArray(nestedArray);

// console.log(flattenedArray);





































