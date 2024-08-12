

    let addButton = document.querySelector('.button')

    addButton.addEventListener('click', ()=>{


        let input_value= document.getElementById('input-value').value ;
       
        if(input_value===""){alert('enter text')}
        else{ 
   let button = document.createElement('button');
   button.id='delete_btn';
   button.innerText='delete';
       
   let div=  document.createElement('div');   
   div.class='new-div';
      div.innerText=input_value;
        let parent= document.querySelector('.container');

        parent.appendChild(div); 
        div.appendChild(button); 
      

      let input= document.getElementById('input-value').value="" ;
            

        button.addEventListener('click', ()=>{
        div.remove();
        }) 
    }
   
    })



 