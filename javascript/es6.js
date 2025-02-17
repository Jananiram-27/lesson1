//Normal function
function print()
{
    console.log("Vanakkam chennai");
}
print();
var arrow=()=>{
    console.log("this is arrow function");
};
arrow();


//Scope of the variable

function describe()
{
   if(true)
   {
    let b=50;
    var a=20;
    console.log(b);
    console.log(a);
   }
  
   console.log(a);
   
}
describe();
//ternary operator
a=11
console.log(a%2 ? "odd":"even")
//5.spread operator(...)
stud1y=["user1","user2","user3"]
stud2y=["user4","user5","user6"]
stud3y=["user7","user8","user9"]
stud4y=["user10","user11","user12"]
studDB=[...stud1y,...stud2y,...stud3y,...stud4y]
console.log(studDB);
aluminiDB=stud4y
console.log(aluminiDB)
//6.rest  operator
function studentDB(...studDB){
    console.log(studDB)
}
studentDB(studDB)

//7.destructing operator
var arr=[10,20,30]
var[x,y,z]=arr
console.log(x)
//8.hoisting
console.log(a);// why it is showing undefined rather than reference error
var a=10;
funhost()
function funhost(){
    console.log("fun")
}
functionhoisting=()=>{
    console.log("hello")
}
// classes and objects
class Classeg{
    classfun=()=>{
        console.log("class")
        return "object"
    }
}
obj=new Classeg()
console.log(obj.classfun());
