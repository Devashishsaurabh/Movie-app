// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let balance=localStorage.getItem("amount")
document.getElementById("wallet").innerText= balance
let movie = JSON.parse(localStorage.getItem("movie"))

movie.forEach(function(ele){

    let poster=document.createElement("img");
    poster.src=ele.Poster;
    poster.setAttribute("class","img")
    let title=document.createElement("h2");
    title.innerText=ele.Title;

    document.getElementById("movie").append(title,poster);
})
function checkout(){
   let seat=document.getElementById("number_of_seats").ariaValueMax;
   let final= seat*100;

   if(final <= balance){
       alert("Booking successful!")
       localStorage.setItem("amount",balance-final)
       document.getElementById("wallet").innerText=balance;
   }else{
       alert("Insufficient Balance!");
   }
}