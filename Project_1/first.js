// const student ={
//     fullname : "vishal singh",
//     age : 26,
//     cgpa : 8.2,
//     isPass: true
// };

// student.age = student.age + 1;
// student.fullname = "Rohit"

// let studentSecond ={
//     fullname : "Om singh",
//     age : 20,
//     cgpa : 9.9,
//     isPass : true
// };

// let a = 7;

// if(a%2 === 0){
//     console.log(a," is even")
// }else{
//     console.log(a," is odd")
// }



// console.log("a++",a++)
// console.log("!(a==b)",!(a==b))

// let mode = "blue"
// let color;

// if(mode === "dark"){
//     color = "black"
//     console.log("dark color")
// }else if(mode === "light"){
//     color = "light"
//     console.log("light color")
// }else{
//     color = "blue"
//     console.log("blue color")
// }

// let age = 22;

// let result = age >= 18 ? console.log("adult") : console.log("not adult");

// console.log(result);

// let num = prompt("Enter a number")

// if(num % 5 === 0){
//     console.log(num , " is miltiple of 5");
// }else{
//     console.log(num , " is not multiple of 5")
// }

// let score = prompt("enter your score 0-100") ;
// let grade;
// if(score >= 80 && score <=100){
//     grade = "A"
// }else if(score <= 79 && score >=70){
//     grede = "B"
// }else if(score >=60 && score <=69){
//     grade = "c"
// }else if(score >= 50 && score <= 59){
//     grade ="D"
// }else{
//     grade = "F"
// }

// console.log("you grade are as per you score :", grade)

// let result = prompt("enter a number");

// if(result % 5 === 0){
//     console.log(result, "is a multiple of 5")
// }else{
//     console.log(result, "is not multiple of 5")
// }

// let enterName = prompt("Enter your Name to check your details")

// let age;
// let occupation;
// let husbandName;
// // let location= "jaunpur";

// if(enterName === "rita singh"){
//     age = 56;
//     occupation = "houseWife"
//     husbandName = "Vinod KUmar Singh";
//     // location = "jaunpur"
//     console.log(enterName," is",age,"year old and she is a",occupation,"and his husband name is",husbandName,"and location is")
// }else if ( enterName === "om singh"){
//     age = 14;
//     // location = "jaunpur";
//     occupation = "student";
//     console.log(enterName," is",age,"year old and he is a",occupation)
// }else if(enterName === "shubh singh"){
//     age = 10;
//     occupation = "student";
//     // location = "jaunpur"
//     console.log(enterName," is",age,"year old and he is a",occupation)
// }else{
//     console.log("Sorry no detail found")
// }


// write a table of 5 
// let i = "javaScript";
// for(let i = 1; i.lenght; i++){
//     console.log(i)
// }

// let i =1;
// let num = 2;
// while(i <= 10){
//     console.log(i*num);
//     i++
// }

// do while loop

// let i =1;

// do {
//     console.log(" i value",i)
//     i++
// }while(i <=10);

// let str ="javascrpit";
// let size = 0;

// for(let i of str){
//     console.log("i=",i);
//     size ++

// }
// console.log("lenght of javascpit is ",size)

// let student = {
//     fullname : "vishal singh",
//     age : 26,
//     cgpa : 6.6,
//     email : "sngshanky@gmail.com"
// }

// for( let i in student){
//     console.log("key of student object is ",i,student[i])
// }

// print all even number from 0 to 100

// for(let i = 0; i<= 100; i++){
//     // console.log("even number are" ,i);
//     if(i%2 === 0){
//         console.log("even number are",i);
//     }else{

//     }

    
// }

// let gameNum = prompt("Gusses the corrent Number");

// if( gameNum == 25){
//     console.log("Congratulations You Win the game!!!!")
// }else{
//     console.log("TRY Next Number")
// }

// let gameNum = 25;
// let userNum = prompt("Enter a number")
// while(userNum != gameNum){
//     userNum = prompt("Enter a number again");
// }

// console.log("you gusses the right number")


// let gameNum = 25;
// let userNum = prompt("Enter a number")
// for(i=1; userNum != gameNum; i++){
//     userNum = prompt("Enter a number again");
// }
// console.log("you gusses the right number")

// let obje ={
//     item : "pen",
//     price : 20
// }

// let output = `the item is ${obje.item} and the price is ${obje.price}`

// console.log(output)

// let num = "    vishal singh  8     " ;

// let newnum = num.toLowerCase();

// numtext = num.trim();
// console.log(num.length)
// // console.log(newnum);

// console.log(num);

// let str1 = "vishal";
// let str2 ="singh";

// let res = str2.concat(str1);
// console.log(res)

// let userName = prompt("enter you name")
// let addname = "@"
// let newName = addname.concat(userName,userName.length);
// console.log(newName)

// let marks =[1, 2, 3, 4, 5, 6];

// let heroes = ["spiderman", "ironman", "antman", "hulk"]

// console.log(marks)
// for(let i = 0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }
// for(let el of marks){
//     console.log(el);
// }

// let marks = [88, 34, 54, 67, 44, 32, 56];
// let sum = 0;

// for(let i=0; i<marks.length; i++ ){
//     sum = sum + marks[i];
   
// }
// console.log(sum)

// let ave = sum/marks.length
// console.log("average marks of class is ",ave)
// for(let el of marks){
//     sum = sum + el
    
// }
// console.log(sum)

// let item = [250, 645, 300, 900, 50];
// // let finalPrice = 0;
// for(let i=0; i<item.length; i++){
//     console.log(item[i])
//     let offer = item[i] / 10;
//     item[i] = item[i] - offer
//     // console.log("neww",finalPrice)
    
// }
// console.log(`new price is ${item}`)

// let arry = [1, 2, 3, 4, 5, 6, 7];
// let arry2 = ["vishal", "rohit", "rahul"]

// let newArry = arry.push(8,9);

// console.log(arry)

// let newArry = arry.pop();
// console.log(arry)

// let newArry = arry.toString(arry);
// console.log(arry)

// let newArry = arry.concat(arry2);
// console.log(newArry)

// let newArry = arry.unshift("vishal");
// console.log(arry)

// let newArry = arry.shift();
// console.log(arry)

// let newArry = arry.slice(2,5)
// console.log(newArry)

// let comp = ["Bloombery", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// let newComp = comp.shift();

// console.log(comp);

// let remove = comp.splice(1,1,"Ola")

// console.log(comp)

// let add = comp.push("Amazon")
// console.log(comp)


// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++
//         }
//     }

//     console.log(count)
// }

// countVowels("vishalsingh");

// function countVowel(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         // console.log(str[i])
//        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//         count++
//        }
//     }
//     console.log(count);
// }

// countVowel("aeiou");

// let arrow = (abc) => {
//   let  count = 0;
//     for(let i=0; i<=abc.length; i++){
//         // console.log(abc[i])
//         if(abc[i] === "a" || abc[i] === "e" || abc[i]=== "i" || abc[i] === "o" || abc[i] === "u"){
//          count++
//         }
//     }
//    return count
// }


// let arr = [1, 2, 3, 4, 5];

// // forEachLoop
// let calu = (arr) => {
//     console.log(arr*arr)
// }
// arr.forEach(calu);
// // arr.forEach((Element) =>{
// //     // console.log("element",Element,index)
// //     let squre = Element*Element;
// //     console.log(squre)
// // })\

// function callBack(str){
//     console.log("hello!")
//     return str
// }

// const arr = [1, 2, 5, 4];
// // const arr = ["bike", "car"]
// const count = arr.push(6);
// let addArr = [];
// let newArr = arr.map((val) =>{
//     return val * val
// })


// let newArr = arr.filter((val) =>{
//     return val 
// })
// arr.forEach((Element) =>{
//     // console.log(Element)
//     addArr.push(Element)
// })
// let newArr = arr.map((Element) =>{
    
//     return Element
// })
// for(let i=0; i< arr.length; i++){
//     // console.log(arr[i])
//     sigaleArray = arr[i];
//     addArr.push(sigaleArray)
// }


// console.log("new array",newArrArr)
// // console.log(arr)
// // console.log("count",count)

// let marks = [88, 92, 90, 96, 56, 78];

// // by using filter we will gwt 90+ marks from the array

// let newMarks = marks.filter((val) =>{
//     return val >= 90; 
// })

// console.log("student score 90+ are",newMarks)

// let user = prompt("Enter a Number");

// let arr = [];

// for(let i=1; i<= user; i++){
//     arr[i-1] = i;
// }

// console.log(arr)

// let newArr = arr.reduce((res,cur) =>{
//     return res+cur;
// })
// console.log("sum",newArr)
// let print = '';
// function createHelloWorld(){
//     print = "hello world"
//     function f(){
//         return print
//     }
//     return f;
// }

// let check = createHelloWorld();
// console.log(check)

// function createHelloWorld(){
//     return function(){
//         return "Hello World"
//     }
// }

// let check = createHelloWorld();
// console.log(check)

// let n = 10;

// function crateCounter(n){
//     return function(){
//         return n++;
//     }
// }
// let n = 10;

// let check = crateCounter(10);
// console.log(check)

// let items = [85, 97, 44, 37, 76,60];
// let sum = 0;

// for(let i=0; i< marks.length; i++){
//     sum = sum + marks[i];
    
// }

// let average = sum/marks.length

// console.log(average)

// for(let elem of marks){
//     // sum = elem + marks
//     console.log(elem)
// }
// console.log(sum)
// let average = sum/marks.length

// console.log(average)
// let finalPrice = [];
// for(let i=0; i<items.length; i++){
//     // console.log(items[i])
//     let offer = items[i]/10;
//     // console.log(offer)
//      items[i] = items[i]-offer
//     //  items.push(finalPrice)
//     // console.log("final price",finalPrice)
// }
// console.log("final price",items)

// let companies = ["Bloombery", "microsoft", "uber","google","IBM", "Netflix"];

//  companies.shift();
// console.log(companies)

// companies.splice(1,1,"ola")
// console.log(companies)

// companies.push("amazon")
// console.log(companies)

// function countVowel(str){
//     let count = 0;
// for(let i=0; i<str.length; i++){
//     if(str[i] === "a" || str[i] == "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//     count++
//     }
// }
// console.log(count)
// }

// countVowel("shanky")

// let arrow =(str) =>{
//     let count = 0;
//     for(let i=0; i< str.length; i++){
//         if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]=="u"){
//             count++
//         }
//     }
//     console.log(count)
// }

// arrow("aieou")



// let num =  [2, 4, 3, 4, 6, 7, 1 ];

// for(let i=0; i< num.length; i++){
//     // console.log(num[i])
//     if(num[i] === 7){
//         console.log("aaa")
//     }
// }
// for(let val of num){
//     // console.log(val)
//     let add = num[1]+ num[2]
//     console.log(add)
// }

// let friuts = ["apple", "orange","banana"];

// let lenght = friuts.map((val) =>{
//     return val.length
// })

// console.log(lenght)

// function findPair(num,target){
//     let pair = [];
//     for(let i=0; i<num.lenght; i++){
//         for(let j=0; j<num.lenght; j++){
//             if(num[i] + num[j] === target){
//                 console.log("num[i]",num[i])
//                 pair.push([num[i],num[j]])
//             }
//         }
//     }
//     // return pair;
//     console.log("pair",pair)
// }

// let num = [2, 4, 3, 4, 6, 7, 1 ];

// let target = 7;

// let result = findPair(num,target)
// console.log("result",result)


// let arr = [1,2,3,4,5];

// arr.pop();

// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((val) =>{
//     console.log(val)
// })
// if(arr.indexOf(5) != -1){
//     console.log("element found")
// }else{
//     console.log("element not found")
// }

// arr.splice(3,2)
// console.log(arr)
// let newArr = arr.map((val)=>{
//     return val;
// })
// console.log(newArr)
// const fruits = ['banana', 'apple', 'orange', 'mango'];

// fruits.sort();
// console.log(fruits)

// const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
// // removeNumber(arrOfNum);
// function removeNumber(arrOfNum){
//     const set = new Set(arrOfNum);
//     return [...set];
// }
// // console.log(arrOfNum)
// let check=removeNumber(arrOfNum);
// console.log(check)
//   console.log(getUniqueValues(arrOfNum))
// 
// function getUniqueValues(arrOfNum) {
//     const set = new Set(arrOfNum);
//     return [...set];
//   }
// let num = [2, 4, 3, 4, 6, 7, 1 ];

// let target = 7;

// function findPair(num,target){
//     let pair =[];
//     for(let i=0; i<num.length; i++){
//         for(let j=0; j<num.length; j++){
// if(num[i]+num[j] === target){
//     pair.push([num[i],num[j]])
// }
//         }
//     }
//     console.log()
//     return pair
// }

// let indexss = findPair(num,target);

// console.log("index are",indexss)
// 
// 
// console.log(temp);
// const temp = 2;

// function onclick(even){
// prompt("box")
// console.log("dhd",even)
// }

// function crateCounter(n){
//     return function(){
//         return n++;
//     }
// }
// let n = 10;

// let check = crateCounter(n);
// console.log("dsd",check)

// function createCounter(n){
//     let count = n;

//     function counter(){
//         return count++
//     }
//     return counter;
// };

// let check = createCounter(-2);
// console.log(check())
// console.log(check())
// console.log(check())

// function createCounter(n) {
//     let count = n;
  
//     // Define the counter function within the closure
//     function counter() {
//       return count++;
//     }
  
//     // Return the counter function
//     return counter;
//   }
  
//   // Example usage:
//   const myCounter = createCounter(5);
  
//   console.log(myCounter()); // Output: 5
//   console.log(myCounter()); // Output: 6
//   console.log(myCounter()); // Output: 7

// const p = document.querySelector('.p');
// p.textContent = 'My name is vishal!';
// alert('Text Set');
// https://restcountries.com/v3.1/name/{name}

// 'use strick';

// const btn = document.querySelector('.btn-country');
// const countriesCountainer= document.querySelector('.countries');


// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/name/portugal');
// request.send();

// request.addEventListener('load',function (){
//     const [data] = JSON.parse(this.responseText);
//     console.log("data",data);

//     const html = `
//     <article class="country">
//         <img class="country___img" src="${data.flags.svg}" alt="">
//         <div class="country__data">
//             <h3 class="country__name">${data.subregion}</h3>
//             <h3 class="country__region">${data.region}</h3>
//            <p class="country__row">${data.population}</p>
//            <p class="country__row">${data.languages}</p>
//            <p class="country__row">${data.currencies.EUR.name}</p>
//         </div>
//     </article>`;
//     countriesCountainer.insertAdjacentElement('baforeend',html);
// })

// let h2 = document.querySelector('h2');
// console.dir(h2.innerText);

// h2.innerText =  ' JavaScripts from Apna colony '
// let divs = document.querySelectorAll('.box')
// // console.dir(divs)
// let index =1
// for(div of divs){
//     console.log(div.innerText)
//     div.innerText = 'new text in div ' + index
// index++
// }

// divs[0].innerText = 'from div one'
// divs[1].innerText = 'from div two'
// divs[2].innerText = 'from div three'



// let div2 = document.querySelector('div')
// console.dir(div)
// div.textContent = 'second Text'

// let div3 = document.querySelector('div')
// console.dir(div)

// div.textContent = 'third Text'

// let divs = document.querySelectorAll('.box')
// // console.log(divs)
// index = 1;
// for(div of divs){
// // console.log(div.outerText)

// div.innerText = 'new text in div' + index
// index++

// console.log(div.innerText)

// }

// let element = document.getElementById("demo").childNodes[0].nodeValue;
// console.log(element)

// let element = document.getElementById("h1").childNodes[0].nodeValue
// console.log(element)
// let element = document.body.innerHTML
// console.log(element)


// document.getElementById('demo').innerHTML = document.body.innerHTML


// let element = document.getElementsByTagName('h2')
// console.log(element)

// let element = document.querySelector("h2")
// console.log(element.innerText)

// element.innerText = element.innerText  + " from aapna collage"
// console.log(element)

// let element = document.querySelectorAll(".box")
// // console.log(element[0].innerText)
// index = 1
// for(ele of element){
//     console.log(ele.innerText)
//     ele.innerText = "div have a number of " + index
//     index++
// }

// let element = document.querySelector(".box");
// console.log(element.setAttribute('class', 'new_box'))


// // element.setAttribute('class', 'new_box') =  element.setAttribute('class', 'new_box') + 'new class'

// console.log(element[2].getAttribute('class'))

// let div = document.querySelector('div')
// console.log(div)

// div.style.backgroundColor = "red"

// div.innerHTML  = 'hello javascript'

// let btn = document.createElement('button')
// btn.innerHTML = 'click me'
// console.log(btn.innerHTML)

// let div  = document.querySelector('div')
// div.append(btn)

// let p = document.createElement('h1')
// p.innerHTML = "this is new heading"

// document.querySelector('body').prepend(p)

// // let para = document.querySelector('h1')
// // console.log(para.innerHTML)

// // para.remove(para)

// let btn = document.createElement('button')
// btn.innerHTML = 'click Me!'

// btn.style.backgroundColor= 'red';
// btn.style.color = 'white'

// let div = document.querySelector('body')

// div.prepend(btn)

// let para = document.querySelector('p')
// para.classList.add('newClass')
// // para.classList.remove('content')

// let newBtn = document.querySelector("button");
// console.log(newBtn)

// let handler3 = () =>{
//     console.log('ypu have click the button !!')
// }
// newBtn.addEventListener('click',handler3);

//  newBtn.addEventListener('click',() =>{
//     console.log("you have click the button oneeeee!!!")
//  })
//  newBtn.addEventListener('click',() =>{
//     console.log("you have click the button twooooo!!!")
//  })
//  newBtn.removeEventListener('click',handler3)


// click on button then the mode will be dark and if angain click then it wil bee light


// let element = document.querySelector('.btn1')
// let mode = 'light';

// element.addEventListener('mouseover',()=>{
//   if(mode === 'light'){
//     mode = 'dark'
//     document.querySelector('body').style.backgroundColor = "black"
//   }else{
//     mode = 'light'
//     document.querySelector('body').style.backgroundColor = "white"
//   }
//   console.log(mode)
// })

// console.log(mode)

// ----------------------------------Game code----------------------------------------

let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')
console.log(msg)

const getcompChoice = ()=>{
  let comOption = ["rock","paper","scissors"];
  let index = Math.floor(Math.random() * 3)
  // console.log(index)
  return comOption[index]
}

const drawGame = ()=>{
  console.log("game was draw");
  msg.innerHTML = "Game Draw"
  msg.style.backgroundColor = "black"
}

const showWin = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++
    userScorePara.innerText = userScore
    console.log("You win!!");
    msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++
    compScorePara.innerText = compScore
    console.log("You lose!!");
    msg.innerHTML = `You lose!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"

  }
}

const playGame = (userChoice,)=>{
console.log("we click a circle of ", userChoice)
const compChoice = getcompChoice();
console.log("comp click a circle of ",compChoice)
if(userChoice === compChoice){
  drawGame();
}else{
  let userWin = true;
  if(userChoice == "rock"){
    // paper,scissor
    userWin = compChoice === "paper"? false : true;
  }else if(userChoice === "paper"){
    // rock,scissor
    userWin = compChoice === "scissors"?false : true;
  }else{
    // rock,paper
    userWin = compChoice === "rock"?false : true
  }
  showWin(userWin,userChoice,compChoice)
}

}

choice.forEach((choice) =>{
  // console.log(choice)
  choice.addEventListener('click', ()=>{
    // console.log("we click a box")
    const userChoice = choice.getAttribute('id')
    // console.log("we click a cicle of ", userChoice)
    playGame(userChoice)
  })
})

// let choices = document.querySelectorAll(".choice");
// let msg = document.querySelector("#msg");
// let userScorePara = document.querySelector("#user-score");
// let compScorePara = document.querySelector("#comp-score");
// // console.log(choices)
// let getCompChoice = ()=>{
//   let option = ["rock","paper","scissors"];
//   let index = Math.floor(Math.random() * 3)
//   // console.log(index)
//   return option[index]
// }
// let userScore = 0;
// let compScore = 0;
// let showWin = (userWin)=>{
// if(userWin){
// userScore++
// userScorePara.innerHTML = userScore;
//   console.log("you win");
//   msg.innerHTML = "You Win";
  
// }else{
//   compScore++
//   compScorePara.innerHTML = compScore
//   console.log("you lose");
//   msg.innerHTML = "You lose";
// }
// }

// let drawGame = ()=>{
//   msg.innerHTML = "Game Draw"
// }

// let playGame = (userChoice)=>{
//   console.log("you have selected ",userChoice)
//   let compChoice = getCompChoice();
//   console.log("comp have selected ",compChoice)
//   if(userChoice === compChoice){
//     drawGame()
//   }else{
//     let userWin = true;
//     if(userWin === "rock"){
//       // paper,scissors
//      userWin = compChoice === "paper"?false:true
//     }else if(userWin === "paper"){
//       // rock,scissors
//       userWin = compChoice === "scissors"?true:false
//     }else{
//       userWin = compChoice === "rock"?true:false
//     }
//     showWin(userWin)
//   }
// }

// choices.forEach((choices)=>{
// // console.log(choices)
// choices.addEventListener('click',()=>{
//   // console.log('we click the button')
//   let userChoice = choices.getAttribute("id")
//   // console.log("you have selected ",userChoice)
//   playGame(userChoice)
// })
// })