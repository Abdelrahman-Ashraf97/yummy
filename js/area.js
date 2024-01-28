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


/* ============== get all areas==============  */


 async function getareas(){
    const loader=$(".loading")
    loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
        $('body').css("overflow","auto")
    })
    loader.remove()
    displaydata(meals);
    
}
getareas()
function displaydata(meals){
    let container='';
    meals.forEach(country => {
        container+=`
        <div class="col-lg-3 text-white " onclick="showDetails('${country.strArea}')">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3 class="fs-4">${country.strArea}</h3>
            </div>
      ` 

        
    });
    document.querySelector(" main .row").innerHTML=container
}
function showDetails(area){

   
   location.href=`./areameals.html?a=${area}`
}

