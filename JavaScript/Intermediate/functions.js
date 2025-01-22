// function hi(){
//     return("helo");
// }

// console.log(hi())

// function greetings (name){
//     console.log("hello ",name);
//     console.log(`Hello ${name}`);
// }

// greetings ("Guman")

function getUserRole(name,role){
    switch(role){
        case "admin":
        return console.log(` ${name} is admin`);
    break;
    case "subadmin":
        return console.log(` ${name} is sub-admin`);
        break;
    }

}

// getUserRole("Guman","subadmin");

// function sayName(){
//     var name = `Guman`
//     console.log(name)
// }
// sayName()


function calculatecratprice (val1,val2,...num1){
    return num1
}

// console.log(calculatecratprice(1,2,3,4,5,6,7,8,9,10))

function user(AnyObjeect){
    return (`${username} welcome to the ${site}`)
}

console.log({
    username: "Guman",
    site: "Gumanbehera.com"    
})

const newArray = [1,2,3,4,5,6,7,8,9,10];

function returnSvalue(getArray){
    return getArray[1]
}

// console.log(returnSvalue(newArray))

