
// const computersElement = document.getElementById("selector");
// const lon = document.getElementById("lon");
// const Bbalance = document.getElementById("balance");

// let work = 0;
// let pay = 0;
// let computers = [];
// let add = [];
// let total = 0.0;


// function Work() {
//     work += 100;
//     const workElement = document.getElementById("work").innerText = `${work}`;
// }

// function Transfer() {
//     pay += work;
//     work = 0;
//     workElement = document.getElementById("work").innerText = `${work}`;
//     const bankElement = document.getElementById("balance").innerText = pay;

// }
// // fetch 
// fetch('https://noroff-komputer-store-api.herokuapp.com/computers')
//     .then(response => response.json())
//     //.then(data => console.log(data));
//     .then(data => computers = data)
//     .then(computers => addComputers(computers));

// const addComputers = (computers) => {
//     computers.forEach(x => addComputer(x));

// }
// const addComputer = (computer) => {
//     const computerElement = document.createElement("option");
//     computerElement.value = computer.id;
//     computerElement.appendChild(document.createTextNode(computer.title));
//     computersElement.appendChild(computerElement);

// }

// const handeleDropdown = e => {
//     const selectComputer = computers[e.target.selectedIndex];
//     priceElement.innerText = selectComputer.price;
// }

// computerElement.addEventListener("change", handeleDropdown)

// // get  loan
// const  getLon = e => {

//     let balance = parseInt (Bbalance.innerText);
//      const maxValue = balance * 2;
//     let lonm = prompt("enter how mutch you want loan");

//     if(lonm <= maxValue){
//         balance+= parseInt(lonm);
//          const bankElement = document.getElementById("balance").innerText = balance;
//     }

//     // if(lonm > 0){
//     //     const bankElement = document.getElementById("balance").innerText = balance
//     //     let cheacLoan = document.getElementById("payback").style="display:block";
//     // }
//     // if(lon >= balance *2){
//     //     alert(" you lon is higher");
//     //     const bankElement = document.getElementById("balance").innerText = balance;

//     // }
// }






// lon.addEventListener("click", getLon)


const laptopsElement = document.getElementById("laptops");
const feturesElement = document.getElementById("fetures");
const bankButton = document.getElementById("bank");
const workButton = document.getElementById("work");
const saleryElement = document.getElementById("salery");
const loanButton = document.getElementById("loan");
const balanceElement = document.getElementById("balance");
const priceElement = document.getElementById("price");
const specsElement = document.getElementById("specs");
const titleElement = document.getElementById("title");
const idelement = document.getElementById("id");
const imgElement = document.getElementById("img");
const bankElement = document.getElementById("balance");
const debtElement = document.getElementById("debt");
const paybackButton = document.getElementById("payback");




//declaration of variables

let work = 0;
var transfer = 0;






//Work to make money function
const workFunction = () => {
    //every time you work you get a hundred SEK
    work += 100;
    //payments placeholder
    saleryElement.innerText = `${work}`;

}

const bankFunc = () => {
    transfer += work
    work = 0;
    saleryElement.innerText = `${work}`;
    balanceElement.innerText = transfer;
}

// Get loan function
const getLoan = e => {
    let balance = parseInt(bankElement.innerText);
    const maxValue = balance * 2;
    console.log(maxValue);
    let Loan = prompt("Enter hoe mutch you want to loan from the bank");

    if (Loan < maxValue || Loan > maxValue * 2) {
        balance += parseInt(Loan);
        bankElement.innerText = parseInt(balance);
        debtElement.innerText += parseInt(Loan);

    }
    if (Loan > maxValue) {
        alert("the value is high");
        return true;
    }
    if (debtElement > Loan) {
        paybackButton.style.display = "block";
    }

    


}

const handelpayback = () => {

    
        console.log("button working");
}







let laptops = [];
let add = [];
let totalDue = 0;


// fetch API

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
    laptops.forEach(x => addLaptopToMenu(x));
    priceElement.innerText = laptops[0].price;
    feturesElement.innerText = laptops[0].description;
    specsElement.innerText = laptops[0].specs;
    idelement.innerText = laptops[0].id;
    titleElement.innerText = laptops[0].title;
    // imgElement.innerHTML = laptops[0].image;

    console.log(imgElement);
}

const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    console.log(laptopElement);
    laptopsElement.appendChild(laptopElement);




}
const handelLaptopMenuChange = e => {

    const selectlaptop = laptops[e.target.selectedIndex];
    priceElement.innerText = selectlaptop.price;
    feturesElement.innerText = selectlaptop.description;
    specsElement.innerText = selectlaptop.specs;
    idelement.innerText = " ID Number " + selectlaptop.id;
    titleElement.innerText = selectlaptop.title;
    // imgElement.innerHTML = selectlaptop.image;

}

const handleLaptops = () => {

    const selectlaptop = laptops[laptopsElement.selectedIndex];
    const cartItem = document.createElement("li");
    const lineTotal = selectlaptop.price * 2;

}

const handlePay = () => {

}

workButton.addEventListener("click", workFunction);
bankButton.addEventListener("click", bankFunc);
paybackButton.addEventListener("click", handelpayback);
loanButton.addEventListener("click", getLoan);
laptopsElement.addEventListener("click", handelLaptopMenuChange);




