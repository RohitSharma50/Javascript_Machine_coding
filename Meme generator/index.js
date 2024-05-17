function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
.then((res) => res.json())
.then((data) => {const result= data.url ;
    
     const meme= document.querySelector('.image').src=result;
});
    
    // var img= document.createElement('img');
    // img.= result;
    // var div=document.createElement('div');
    // div.appendChild(img);
    // document.querySelector('.content').appendChild(div);
    // meme.src=result;

    
} 




// https://meme-api.com/gimme/wholesomememes