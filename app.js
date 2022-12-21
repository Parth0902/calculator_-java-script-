(function(){

    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');
    let clear=document.querySelector('.btn-clear');
    let del=document.querySelector('.btn-del');
   buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let val=e.target.dataset.num;
        screen.value+=val;
    })
   })
   
   equal.addEventListener('click',function(e){
    if(screen.value==='')
    { 
       
     screen.value="";
       
    } else{
        let ans=eval(screen.value);
        screen.value=ans;
    }

   })

   clear.addEventListener('click',(e)=>
   {
    screen.value="";
   })

   del.addEventListener('click',(e)=>
   {
    if(screen.value==='')
    {
        screen.value="";
    }
    else{

        let og=screen.value;
        
        let var1=og.substr(0,og.length-1);

        screen.value=var1;
        
    }
   })
 
})();