
let append=(data,container)=>{

    container.InnerHTML=null;
    data.forEach(({caption,image_url})=>{


       let div=document.createElement("div");
       
       let caption_p=document.createElement("p");
       caption_p.innerText=caption

       let image=document.createElement("img")
       image.src=image_url

       div.append(caption_p,image);
 
       container.append(div)

    });
}

export {append};