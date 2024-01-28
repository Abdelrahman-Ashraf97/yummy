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


   /* ============== form submit ==============  */
   const myInputs=document.querySelectorAll("input:not([type='submit'])");
   const btn= document.querySelector("input[type='submit']")
   
   document.forms[0].addEventListener("submit",function(e){
    e.preventDefault();
   })
   function checkAllValid(){
    if(nameValidation()&&emailValidation()&&phoneValidation()&&ageValidation()&&passwordValidation()&&passwordValidation2()){
      btn .removeAttribute("disabled");
      btn.addEventListener("click",function(){
        document.querySelector(".success").classList.remove("d-none");
        for(let i=0;i<myInputs.length;i++){
            myInputs[i].value=""
            $("input").removeClass("is-valid");
        }
    })
    }
   }


   /* ============== events ==============  */

   myInputs[0].addEventListener("input",function(){
    nameValidation();
    checkAllValid();
   })
   myInputs[1].addEventListener("input",function(){
    emailValidation();
    checkAllValid();
   })
   myInputs[2].addEventListener("input",function(){
    phoneValidation();
    checkAllValid();
   })
   myInputs[3].addEventListener("input",function(){
    ageValidation();
    checkAllValid();
   })
   myInputs[4].addEventListener("input",function(){
    passwordValidation();
    checkAllValid();
   })
   myInputs[5].addEventListener("input",function(){
    passwordValidation2();
    checkAllValid();
   })














  function nameValidation(){
    const name=myInputs[0].value;
    const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if(regex.test(name)){
        myInputs[0].classList.remove("is-invalid")
        myInputs[0].classList.add("is-valid")

    }
    else{
        myInputs[0].classList.add("is-invalid")
        myInputs[0].classList.remove("is-valid")
    }
    return regex.test(name)
  }
  //============================================================================================

  function emailValidation(){
    const email=myInputs[1].value;
    const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    
    if(regex.test(email)){
        myInputs[1].classList.remove("is-invalid")
        myInputs[1].classList.add("is-valid")

    }
    else{
        myInputs[1].classList.add("is-invalid")
        myInputs[1].classList.remove("is-valid")
    }
    return regex.test(email)
  }
    //============================================================================================


  function phoneValidation(){
    const phone=myInputs[2].value;
    const regex=/^(002)?01[0125][0-9]{8}$/
    
    if(regex.test(phone)){
        myInputs[2].classList.remove("is-invalid")
        myInputs[2].classList.add("is-valid")

    }
    else{
        myInputs[2].classList.add("is-invalid")
        myInputs[2].classList.remove("is-valid")
    }
    return regex.test(phone)
  }
  //============================================================================================

  function ageValidation(){
    const age=myInputs[3].value;
    const regex=/^([1-7][0-9]|80)$/
    
    if(regex.test(age)){
        myInputs[3].classList.remove("is-invalid")
        myInputs[3].classList.add("is-valid")

    }
    else{
        myInputs[3].classList.add("is-invalid")
        myInputs[3].classList.remove("is-valid")
    }
    return regex.test(age)
  }

  //============================================================================================


  function passwordValidation(){
    const password=myInputs[4].value;
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    
    if(regex.test(password)){
        myInputs[4].classList.remove("is-invalid")
        myInputs[4].classList.add("is-valid")

    }
    else{
        myInputs[4].classList.add("is-invalid")
        myInputs[4].classList.remove("is-valid")
    }
    return regex.test(password)
  }
  //============================================================================================


  function passwordValidation2(){
    const password=myInputs[5].value;
    const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    
    if(regex.test(password)&& password== myInputs[4].value){
        myInputs[5].classList.remove("is-invalid")
        myInputs[5].classList.add("is-valid")

    }
    else{
        myInputs[5].classList.add("is-invalid")
        myInputs[5].classList.remove("is-valid")
    }
    return regex.test(password)
  }
    //============================================================================================