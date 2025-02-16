var a=10
let b="abc"
const c=true
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c));
a="abc"
b=21.21
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c));a

array=[1,6,"abc",true,[12,13]]
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(typeof(array))
//objects
//1st type of object declaration
object1={
    "first":"St. Joseph",
    "last":"Institute of technology",
    "department":["CSE","IT","ADS","ECE"],
    "training":"Mern"
}
console.log(object1)
//second type of object declaration
object2={}
object2["firstname"]="st joseph"
object2["lastname"]="Institute of Technology"
object2["department"]=["CSE","IT","ADS","ECE"]
object2["training"]="Mern"
console.log(object2)
//Third type of object declaration
object3=new Object()
console.log(object3)
object3.training="Mern"
object3.department=["CSE","IT","ADS","ECE"]
console.log(object3)
//set
set=new Set("hello")
console.log(set)
set.add("hello")
console.log(set)
console.log(typeof(set))
