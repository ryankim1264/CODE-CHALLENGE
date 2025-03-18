let body = document.body
let h1=document.getElementById("heading")
h1.style.backgroundColor="black"
h1.style.fontSize="50px"
h1.style.color= "pink"


const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating:5 ,comment:"delisioso"},
    { id: 4, name:  "Shawarma", restaurant: "olemukusi", image:".jpg", rating:4 , comment:"perfect"},
    { id: 5, name:  "sanjilspa", restaurant: "kiserian", image:"shoyu (1).jpg", rating:4 , comment:"tremendous"}


 ];
 document.addEventListener("DOMContentLoad", () =>{
    const ramenMenu =document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const ramenDetailName = document.getElementById("ramen-detail-name")
 })

function displayRamens(){
       const ramenMenu = document.getElementById("ramen-menu");
}
const form = document.getElementById("form");
const name = document.getElementById("name")
const restaurant = document.getElementById("resturant")
const image = document.getElementById("image")

function handleClick (ramen){
    document.getElementById("ramen-detail")
    
}




