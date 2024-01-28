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


/* ============== get all ingerdiants==============  */

 async function getingerdiants(){
  const loader=$(".loading");
  loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
      $('body').css("overflow","auto")
  })
  loader.remove()
    displaydata(meals);
    
}
getingerdiants()

function displaydata(ingrediants){
    let container='';
    for(let i=0;i<20;i++)  {  
      let sliceLetters= sliceParagraph(`${ingrediants[i].strDescription}`, 120)

        container+=`
        <div class="col-lg-3 text-white " onclick="showDetails('${ingrediants[i].strIngredient}')">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3 class="fs-4">${ingrediants[i].strIngredient}</h3>
                <p>${sliceLetters}</p>
            </div>
      `     
    }
    document.querySelector(" main .row").innerHTML=container
}



    
function showDetails(ingrediant){

 
   location.href=`./ingrediantmeals.html?i=${ingrediant}`
}


function sliceParagraph(paragraph, maxLength) {
    if (paragraph.length <= maxLength) {
      return paragraph; // Return the original paragraph if it's already within the desired length
    }
  
    const sliced = paragraph.slice(0, maxLength);
    const lastSpaceIndex = sliced.lastIndexOf(' ');
  
    if (lastSpaceIndex !== -1) {
      return sliced.slice(0, lastSpaceIndex); // Slice at the last space character if found
    }
  
    return sliced; // Return the sliced paragraph if no space character found
  }
 


