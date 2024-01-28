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
   /* ============== get meal description==============  */
const param=location.search;
const paramsObject= new URLSearchParams(param)
const id=paramsObject.get("id");



getmealDescription(id);

async function getmealDescription(id){
    const loader=$(".loading")
    loader.removeClass("d-none")
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const{meals}=await api.json();
    loader.fadeOut(1000,function(){
        $('body').css("overflow","auto")
    })
    loader.remove()
   
    displaydata(meals);
   
    

}



function displaydata(meals){
    let recipse=[];
    let finalRecipse=""
    let container='';
   
        for(let j=0;j<meals.length;j++){
            recipse=[meals[0].strMeasure1,meals[0].strMeasure2,meals[0].strMeasure3,
            meals[0].strMeasure4,meals[0].strMeasure5,meals[0].strMeasure6,
            meals[0].strMeasure7,meals[0].strMeasure8,meals[0].strMeasure9,
            meals[0].strMeasure10,meals[0].strMeasure11,meals[0].strMeasure12,
            meals[0].strMeasure13,meals[0].strMeasure14,meals[0].strMeasure15,
            meals[0].strMeasure16,meals[0].strMeasure17,meals[0].strMeasure18,
            meals[0].strMeasure19,meals[0].strMeasure20,meals[0].strIngredient1,meals[0].strIngredient2,meals[0].strIngredient3,
            meals[0].strIngredient4,meals[0].strIngredient5,meals[0].strIngredient6,
            meals[0].strIngredient7,meals[0].strIngredient8,meals[0].strIngredient9,
            meals[0].strIngredient10,meals[0].strIngredient11,meals[0].strIngredient12,
            meals[0].strIngredient13,meals[0].strIngredient14,meals[0].strIngredient15,
            meals[0].strIngredient16,meals[0].strIngredient17,meals[0].strIngredient18,
            meals[0].strIngredient19,meals[0].strIngredient20]
        }
        const filteredArray = recipse.filter((str) => str.length>1);
           console.log(filteredArray);
        
       
        container+=`
        <div class="col-lg-4">
        <figure class="m-0 rounded-2 overflow-hidden">
            <img src="${meals[0].strMealThumb}" class="w-100 img-fluid" alt="">
        </figure>
        <span>${meals[0].strMeal}</span>
    </div>
    <div class="col-lg-8">
        <h2>Instructions</h2>
        <p class="instructions">
        ${meals[0].strInstructions}
        </p>
        <p>Area : <span>${meals[0].strArea}</span></p>  
        <p>Category : <span>${meals[0].strCategory}</span></p>  
        <p>Recipes :  </p>
        <ul class="list-unstyled d-flex flex-row flex-wrap">`
        for(let l=0;l<filteredArray.length/2;l++){
            finalRecipse+= `<li class="alert alert-info p-1 mx-2 ">${filteredArray[l]} ${filteredArray[((filteredArray.length)/2)+l]} </li> `

        }
        container+=finalRecipse;
        let finalTags=""
        if(meals[0].strTags !=null){
            finalTags=meals[0].strTags
        }
       
          
     container+= `  </ul>
        <p>Tags  :</p> 
        <ul class="list-unstyled d-flex flex-row flex-wrap">`
        
        if(finalTags.length>1){
            ` <li class="alert alert-danger p-1 mx-2">${finalTags}</li>`
        }
        else{
            container+=`<br>`

        }
        container+= ` </ul>
        <a href="${meals[0].strSource}" class="btn btn-success">Source</a> 
        <a href="${meals[0].strYoutube}" class="btn btn-danger">Youtube</a> 

    </div> `
    
            
            
             
    
 
        
        
       
        
    
    document.querySelector(".row").innerHTML=container;


}


