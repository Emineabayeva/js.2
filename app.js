
var laptops = [
    {
        model: "ASUS",
        qiymet: 2000,
        yaddash: '256GB',
        stokVeziyyeti: true,
        stocMiqdari: 75,
    },
    {
        model: "HP",
        qiymet: 3000,
        yaddash: '128GB',
        stokVeziyyeti: false,
        stokMiqdari: 50,
    }
]
// console.log(laptops[0].model, laptops[0].yaddash);

//    task1
/*var Model=document.getElementById("model")
var Price=document.getElementById("price")
var Storage=document.getElementById("storage")
var Stock=document.getElementById("stock")

Model.innerText="ASER"
Price.innerText=2000
Storage.innerText='256 GB'
Stock.innerText=true */

//  task2
// var stocnum=50
// var Stocnum= document.getElementById("stocnum")
//  if (stocnum>0){
//     Stocnum.innerText="Stokda movcudur"
//  } else{
//     Stocnum.innerText="Stokda movcud deyil"
//  }              

//  task3
var Tablee = document.getElementById('tablee')

var tablemelumat = ' ';
for (var i = 0; i < laptops.length; i++) {
    tablemelumat +=
        `
    <tr>
    <td >${laptops[i].model}</td>
    <td >${laptops[i].qiymet}</td>
    <td >${laptops[i].yaddash}</td>
    <td >${laptops[i].stokVeziyyeti}</td>
    <td >${laptops[i].stokMiqdari}</td>
    </tr>
    
    
    
    `


}
Tablee.innerHTML = tablemelumat;