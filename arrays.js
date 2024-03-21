let arr1 =[3,7,34, 90,12];
let lastElement = arr1[arr1.length -1];
console.log({lastElement});

let arr2 = [true, "green","where",12,56];
let lastElemen = arr2[arr2.length -1];
console.log({lastElemen});


let array =["Cow","Bird","Snake","Dog"];
console.log(array.toString());


let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);


let arr = ["apple","mamgo","apple","orange","mango","mango"];
function removeDuplicates(data){
    return data.filter ((value,index) => data.indexOf(value)=== index); 
}
console.log(removeDuplicates(arr));


let sortString =(stringg)=>{
    
    return stringg.split("").sort().join("");
}
console.log("sorted string: ");
console.log(sortString("serink"));
