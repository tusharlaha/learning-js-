let marks_class_12 = [91,34,57,43,56,false,"Not present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
marks_class_12[7]=78//adding a new value in array
marks_class_12[0]=56//changing of array
console.log(marks_class_12)
console.log(marks_class_12[7])
console.log("length of array",marks_class_12.length)
let arr1=[91,34,56];//converting loops in array
for(let  i = 0;i<arr1.length ;i++)
{
    console.log(arr1[i])
}//the end [this is how we can convert any array into loop]
let arr2=[91,34,56];//converting loops in array
for(let i in arr2)// this is for in loop
{
    console.log(arr2[i])
}// you can also this for of loop same as usual
//array methods)
let num=[23,45,56,78,90,14]
let b =num.toString()
console.log(b)
let c=num.join("_")
console.log(c)
num.pop()
console.log(num)
num.push(556)
console.log(num)
num.shift()
console.log(num)
num.unshift(33)
console.log(num)
