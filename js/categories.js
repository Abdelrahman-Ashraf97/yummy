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


/* ============== get all categories==============  */

 async function getcategories(){
  const loader=$(".loading")
  loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const{categories}=await api.json(); 
    loader.fadeOut(1000,function(){
      $('body').css("overflow","auto")
  })
  loader.remove()

    displaydata(categories);
    
}
getcategories()
function displaydata(categories){
    let container='';
    categories.forEach(category => {
       
        let sliceLetters= sliceParagraph(`${category.strCategoryDescription}`, 120)
        container+=`
        <div class="col-lg-4 col-xl-3 " onclick='showDetails("${category.strCategory}")'>
        <div class="meal position-relative rounded-2 overflow-hidden">
            <figure class="m-0">
              <img src="${category.strCategoryThumb}" class="w-100">
            </figure>
            <div class="layer w-100 h-100 overflow-hidden ">
              <span>${category.strCategory}</span>
              <p class="text-center">${sliceLetters}</p>
            
            </div>
        </div>
      </div>
      ` 

        
    });
    document.querySelector(" main .row").innerHTML=container
}
function showDetails(cat){
   
   location.href=`./categorymeals.html?c=${cat}`
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

