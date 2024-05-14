 const minBtn = document.querySelector('.minusBtn');
 const plusBtn = document.querySelector('.plusBtn');
 const count= document.querySelector('.counter');
 const changeBy= document.querySelector('.input');
 const reset=document.querySelector('.resetBtn');

 minBtn.addEventListener('click', ()=>{
   const counter=parseInt(count.innerText);
   const change=parseInt(changeBy.value);
   count.innerText= counter-change;
  })

  plusBtn.addEventListener ('click', () => {
    const counter=parseInt(count.innerText);
    const change=parseInt(changeBy.value);
    count.innerText= counter+change;
  })
  
  reset.addEventListener('click', () => {
    count.innerText=0; 
    
  })
 

