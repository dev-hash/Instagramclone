
import { navbar } from "./components/navbar.js"
import { append }  from "./scripts/append.js"

let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML=navbar();

let post_div=document.getElementById("posts");

let getData=async()=>{
      

    let response=await fetch("http://localhost:3000/posts");

    let data=await response.json();

    append(data,post_div);
}

getData()