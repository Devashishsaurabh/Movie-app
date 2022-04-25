// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.getElementById("wallet").innerText= localStorage.getItem("amount")
let id;
async function search(){
    try{
        let query=document.getElementById("search").value;
        let res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);
        let data=await res.json();
        console.log(data.Search);
       const movie=data.Search
       return movie;
    }catch(err){
        console.log(err)
    }
}

function append(data){
document.getElementById("movies").innerHTML=null;
data.forEach(function(ele){
    let div=document.createElement("div");
    div.setAttribute("class","div")
    let poster=document.createElement("img");
    poster.src=ele.Poster;
    poster.setAttribute("class","img")
    let title=document.createElement("h2");
    title.innerText=ele.Title;
    let btn= document.createElement("button");
    btn.innerText="Book Now"
    btn.setAttribute("class","book_now")
    btn.addEventListener("click",function(){
        let arr=[];
        arr.push(ele)
        localStorage.setItem("movie",JSON.stringify(arr));
        window.location.href="checkout.html"
    })

    div.append(poster,title,btn)
    document.getElementById("movies").append(div);
})
}
async function main(){
    let data=await search();
    if(data ===undefined){
        document.getElementById("movies").innerHTML=null;
       return false;
    }
    append(data)
}
function debounce(main,delay){
if(id){
    clearTimeout(id)
}
   id=setTimeout(function(){
       main();
    },delay)
}