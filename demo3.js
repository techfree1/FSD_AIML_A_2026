const student={
    name:"Ashish",
    age:34,
    branch: "AIML"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
const{name : newname,age,branch}=student;
console.log("name",newname);
console.log("age",age);
console.log("branch",branch);