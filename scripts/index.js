// Store the wallet amount to your local storage with key "amount"

document.getElementById("wallet").innerText=localStorage.getItem("amount")||0

function addtowallet(){
    let amount=document.getElementById("amount").value;
       amount= Number(localStorage.getItem("amount"))+Number(amount)
       document.getElementById("wallet").innerText=amount
    localStorage.setItem("amount",amount)
}