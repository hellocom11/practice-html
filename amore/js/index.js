window.onload=function(){
 let tb2 = document.querySelectorAll(".tabmenu2>dt")
 

 for(let i=0; i<tb2.length; i++){
    tb2[i].addEventListener("click",function(){

        for(let j=0; j<tb2.length; j++){
            tb2[j].classList.remove("on")
        }
        this.classList.add("on")
    })


 }



}