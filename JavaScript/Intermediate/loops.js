const name = ["aa","bb","cc",20,"dd","ee","ff"];

// for (let i=0;i< name.length;i++){
//      if(typeof name[i] !== "string") continue;
//     console.log(name[i]);
// }

// let i =0;
// while(i<name.length){
//     if(typeof name[i] !== "string") continue;
//     console.log(name[i])
//     i++;
// }

// let i =0;
// do{
//     console.log(name[i])
//     i++
// }while(i<10)


// name.forEach(element => {
//     console.log(element)
// });

// for(const n of name){
//     console.log(n);
// }

var phone = {
    modelName : "Samsung",
    phoneSeries : "S23 ultra",
    colour : "white",
    ram : "12GB",
    storage : "1TB",
    chipSet : "Snapdragon",
    purchasedQuantity : 20,
    purchasedConfirmed : true,
}

for(const n in phone){
    console.log(`The key is : ${n} for the given values : ${phone[n]}`);
}

// falsy values

// false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function () {}