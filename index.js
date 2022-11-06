
import { navbar } from "./components/navbar.js"
import { append }  from "./scripts/append.js"

let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML=navbar();

let post_div=document.getElementById("posts");

let getData=async()=>{
      

    let response=await fetch("http://localhost:3000/posts");

    let data=await response.json();

    //append(data,post_div);
    createButton(data.length,2);
}

getData()

let getpaginateData=async(clicked_btn,limit)=>{
      
    post_div.innerHTML=null;  
    let response=await fetch(`http://localhost:3000/posts?_page=${clicked_btn}&_limit=${limit}`);

    let data=await response.json();

    append(data,post_div);
    //createButton(data.length,2);
}
getpaginateData(1,2);

const createButton=(total_images,images_per_page)=>{

   const buttons=Math.ceil(total_images/images_per_page)

    for(let i=1;i<=buttons;i++){


        let btn=document.createElement("button");

        btn.id=i;
        btn.innerText=i;
        

        btn.onclick=()=>{
           getpaginateData(i,2);
        }

        document.getElementById("buttons").append(btn);

    }
}