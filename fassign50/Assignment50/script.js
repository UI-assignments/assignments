
//The nullish coalescing operator (??) is a logical operator
// that returns its right-hand side operand when its 
//left-hand side operand is null or undefined, 
//and otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

//Optional Changing is a safe way to access nested object properties even if the property doesnt exist

//example using object 

let pets = {
    cat:{
        name : 'neo'
    }
}
alert(pets.cat?.name)

//IMMUTABLITY value is one whose content cannot be changes without creating entirely new value in javascript 
//primitive values are immutable once value created it cannot be changed.