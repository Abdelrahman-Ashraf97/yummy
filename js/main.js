/// <reference types="../@types/jquery" />
/* ============== open close side nav effects ==============  */
(function (){
    const openCloseBtn= $("#open-close-icon")
   const menu=$("#largMenu")
   openCloseBtn.on("click",function(){
    
       menu.animate({width:`toggle`},500)
       
       if(menu.width()>10){
           openCloseBtn.addClass("fa-align-justify");
           openCloseBtn.removeClass("fa-x");  
       }
       else{
           
           openCloseBtn.removeClass("fa-align-justify");
           openCloseBtn.addClass("fa-x");
           
       }
      
   
   })
   })()
   
    


/* ============== get all meals==============  */
 async function getmeals(){
    const loader=$(".loading");
    loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
        $('body').css("overflow","auto")
    })
    loader.remove()
    displaydata(meals);
}

getmeals()
function displaydata(meals){
    let container='';
    for(let i=0;i<meals.length;i++){
        container+=`
        <div class="col-lg-4 col-xl-3 " onclick="showDetails(${meals[i].idMeal})">
        <div class="meal position-relative rounded-2 overflow-hidden">
            <figure class="m-0">
              <img src="${meals[i].strMealThumb}" class="w-100">
            </figure>
            <div class="layer ">
              <span>${meals[i].strMeal}</span>
            </div>
        </div>
      </div>
      ` 
    }
    document.querySelector(".row").innerHTML=container


}

function showDetails(id){
   location.href=`./details.html?id=${id}`
}





   


