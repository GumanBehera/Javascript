// var phone = {
//     modelName : "Samsung",
//     phoneSeries : "S23 ultra",
//     colour : "white",
//     ram : "12GB",
//     storage : "1TB",
//     chipSet : "Snapdragon",
//     purchasedQuantity : 20,
//     purchasedConfirmed : true,
// }

// console.log(phone.colour);
// console.table(phone);

var users = {
    firstName:"Guman",
    lastName:"Behera",
    role: "User",
    loginCount: 10,
    courseList : [],
    buycourse: function (cousreName){
        this.courseList.push(cousreName)
    },
    getcousreCount:function (){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`
    }
}
// console.log(users.getcousreCount());
// users.buycourse("react js")
// users.buycourse("node js")
// users.buycourse("angular js");
// console.log(users.getcousreCount());

// console.log(users);
