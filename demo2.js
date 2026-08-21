const num=[11,22,32,41,5,63,73,81,9];
const even=num.filter((i)=>(i%2==0));
console.log("num = ",num);
console.log("even = ",even);
const sq=even.map((i)=>(i*i))
console.log("square=",sq);