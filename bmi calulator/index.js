const form=document.querySelector('form')
form.addEventListener('submit',function(e)
{
    e.preventDefault()

    const height=document.querySelector('#height').value
    // .value because to get value for input button
    const weight=document.querySelector('#weight').value
    const results=document.querySelector('#results')
    const results1=document.querySelector('#results1')
    if(height== '' || height < 0 || isNaN(height)){//Nana checks if it is not a number that is it is string 

        results.innerHTML="Please give a valid height"
    } else if(weight== '' || weight < 0 || isNaN(weight)){//Nana checks if it is not a number that is it is string 
        
        results.innerHTML="Please give a valid weight"
    }
    else{

       const bmi= (weight /((height*height) /10000)).toFixed(2)

       //show the result
       results.innerHTML=`<span>${bmi}</span>`
       if(bmi<18.6 )
       {
           results1.innerHTML="under weight"
       }
       else if(bmi>18.6 && bmi<24.6)
       {
           results1.innerHTML="normal range"
       }
       else{
           results1.innerHTML="overweight"
       }
    }
  



})