
// var data = [0, 0, 1, 2, 3, 0, 4, 5, 0, 6, 7, 8, 9, 0, 0, 1, 2, 0, 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9]
// // expected output : [1,2,3,4,5,6,7,6,5,4,3,2,1] 

// const number = data.filter((val) => val !==0
// )
// const newNumber = number.reverse()
// console.log(newNumber)

// // for(let val of data){
// //     if(val !==0){
// //         console.log(val.reverse())
// //     }
// // }

// var data = [0, 0, 1, 2, 3, 0, 4, 5, 0, 6, 7, 8, 9, 0, 0, 1, 2, 0, 0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9];

// var filteredData = data.filter(num => num !== 0);
// var reversedData = filteredData.reverse();
// console.log("dsdh",filteredData)
// console.log(reversedData);
// let demo  = document.getElementById("demo");
// let userInput = prompt("enter a number")

// if(userINput != 0){
//     userInput = userInput*2
//     console.log("sds",userInput)
// }

// demo.innerHTML = userInput
//------------------- ------Prototype------------------------------------
// const employee = {
//     calTaxes(){
//         console.log("tax rate is 10%")
//     }
// }

// const karanArjun1 ={
//     salary: 50000,
//     calTaxes(){
//         console.log("tax rate is 20%")
//     }
// }
// const karanArjun2 ={
//     salary: 50000,
// }
// const karanArjun3 ={
//     salary: 50000,
// }
// const karanArjun4 ={
//     salary: 50000,
// }
// const karanArjun ={
//     salary: 50000,
// }
// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// console.log(karanArjun.calTaxes())
// console.log(karanArjun1.calTaxes())
// console.log(karanArjun2.calTaxes())
// console.log(karanArjun3.calTaxes())
// console.log(karanArjun4.calTaxes())

//-----------------------------------classrs in js------------------------

// class toyotaCar {
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
//     setBrand(brand,model){
//         this.brand = brand;
//         this.model = model;
//     }
// }

// let fortuner = new toyotaCar();
// // console.log(fortuner.setBrand("cruis"));
// fortuner.setBrand("crius",2019)

//----------------------------------Constructor-------------------------------------

// class toyotaCar{

//     constructor(brand){
//         console.log("start constructor")
//         this.brand =brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop")
//     }
// }

// let fortuner = new toyotaCar("BMW");

// console.log(fortuner)

//-----------------------------------practices ---------------------------

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }

//     viewData(){
//         console.log("website data")
//     }
// }

// let student = new User("vishal","sngh@gmail.com");
// let student2 = new User("shamky","sngh@gmail.com")

// console.log(student)

//-------------------------------Asynchronous Programing--------------------------------

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello")
// },4000);

// console.log("three");
// console.log("four")
//--------------------------------Call back Hell---------------------------------------------

function getData(dataId,nextData){
    setTimeout(()=>{
        console.log("data",dataId)
        if(nextData){
            nextData()
        }
        
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})
//--------------------------------------------------------------------------------------------------