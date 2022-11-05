
import { navbar } from "./components/navbar.js"

let navbar_div=document.getElementById("navbar");

navbar_div.innerHTML=navbar();


let create_btn=document.getElementById("create_btn")
create_btn.onclick=()=>{

    CreatePost();
}

let delete_post=document.getElementById("delete_post");
delete_post.onclick=()=>{
   DeletePost();
}

let update_post=document.getElementById("update_post");
update_post.onclick=()=>{
   updatePost();
}



let postImage=document.getElementById("image");
 postImage.onchange=()=>{

    handleImage();
 }


 let image_url;
 let handleImage=async()=>{

    let postImage=document.getElementById("image");

    let actualImg=postImage.files[0]
    console.log("actualimg:",actualImg)
     
    let form=new FormData()

    form.append("image",actualImg);

    
    let resonse=await fetch(`https://api.imgbb.com/1/upload?key=8d7aab0c3467738ae256a6d2a088650e`,{

       
       method:"POST",
       body:form,
    })
    console.log(resonse)
    let data=await resonse.json();
    console.log("data:",data)
     
    image_url=data.data.display_url
 }


 let CreatePost=async()=>{

   let id=document.getElementById("id").value ;
   let caption=document.getElementById("caption").value ;

   let post_this_data={

      id,
      caption,
      image_url,
  }

   let response=await fetch('http://localhost:3000/posts',{

       method:"POST",
       body:JSON.stringify(post_this_data),
       
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json',
       }


   });

   let data=await response.json();
   console.log("data:",data);
 }


 let DeletePost=async()=>{

   let delete_id=document.getElementById("delete_id").value ;

   let resonse=await fetch(` http://localhost:3000/posts/${delete_id}`,{

   method:"DELETE",
   headers:{
      'Content-Type':'application/json',
   }
   });
   
   let data=await resonse.json();

   console.log(data);
}


let updatePost=async()=>{

   let update_id=document.getElementById("update_id").value ;
   let update_caption=document.getElementById("update_caption").value;

   
   
   

   let response=await fetch(`http://localhost:3000/posts/${update_id}`,{

      method:"PATCH",
      body:JSON.stringify({caption:update_caption}),
      
      headers:{
         'Content-Type':'application/json',
      }

   })
   let data=await response.json();
   console.log(data)
   

}