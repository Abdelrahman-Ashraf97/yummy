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
   /* ============== get meals by name==============  */

    const searchName=document.getElementById("searchName")

   searchName.addEventListener("input",function(e){
    getmealsByName(e.target.value)
   

   })

   async function getmealsByName(val){
    const loader=$(".loading");
    loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
      $('body').css("overflow","auto")
  })
  loader.remove()
    displaydata(meals);
}

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
    document.querySelector("main .row").innerHTML=container


}

function showDetails(id){
   location.href=`./details.html?id=${id}`
}

 /* ============== get meals by letter==============  */
 
  const searchLetter=document.getElementById("searchLetter");
  searchLetter.addEventListener("input",function(e){
    getmealsByLetter(e.target.value)

  })
 async function getmealsByLetter(Letter){
  const loader=$(".loading");
  loader.removeClass("d-none")
    const api=await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
      $('body').css("overflow","auto")
  })
  loader.remove()
    displaydata(meals);

  }