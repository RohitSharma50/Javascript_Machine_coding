 
 const box= document.querySelectorAll('.btn');
 const resetBtn= document.querySelector('.resetBtn');
  

 const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];

 
 let user=true;
 box.forEach((box) =>{
   box.addEventListener('click', ()=>{
    if(user) {
        box.innerText='X';
        user=false;
               }
    else{
          box.innerText='0';
          user=true; 
        }
          box.disabled=true; 

                checkWinner();
                    });
                        });
   function checkWinner(){
    for(let pattern of winPatterns){
        let pos1=box[pattern[0]].innerText ;
        let pos2=box[pattern[1]].innerText ;
        let pos3=box[pattern[2]].innerText ;
        
        if(pos1!=''&& pos2!='' && pos3!='') {
        if(pos1===pos2 && pos2 ===pos3){
            alert( 'winner is' + ' '+ pos1);
        }
    }
    }
   }
              resetBtn.addEventListener('click', ()=>{
                window.location.href=window.location.href;
   })