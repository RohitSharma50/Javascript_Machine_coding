
var index=0;
const nextBtn=document.getElementById('nextBtn');
const preBtn=document.getElementById('preBtn');
let arr=["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/786d1178-6e5a-459f-9789-3ef3ee27f8b3_841660.jpg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/786d1178-6e5a-459f-9789-3ef3ee27f8b3_841660.jpg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/85ccae4e3576f9330af102c46ca85395",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56d5abe62452d827b7480c4f5515460a",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/88fa9ce8-bcf9-4840-adb6-cfc6f6aa93de_100721.jpg",
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bb0922605d5672b07491402daaad9e6d",];

function ImageCrousel(){
    

 const img=document.getElementById('image');

if(index<0){index=5}
index= index%5;
 img.src=arr[++index ];

 
 

  setTimeout(()=>{ImageCrousel()}, 5000);  
    }
  ImageCrousel();

  nextBtn.addEventListener('click',()=>{
    const img=document.getElementById('image');

if(index<0){index=3}
index= index%5; 
 img.src=arr[++index ];

  })

  preBtn.addEventListener('click',()=>{
    const img=document.getElementById('image');
    index= index%5;

if(index<0){index=6}
if(index===0){index=6}

 img.src=arr[--index];
console.log(index)
 
 

  })