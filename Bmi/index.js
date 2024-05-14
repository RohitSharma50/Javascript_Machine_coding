function bmiCalculate(){
    let weight= document.getElementById('weight-input').value;
    let height= document.getElementById('height-input').value;
  
    let bmi= ((weight*1000)/(height*height)).toFixed(2);
   document.getElementById('result').innerText +=bmi;

}




